#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
飞书400号码库 → numbers.js 自动同步脚本
从飞书多维表格读取号码数据，生成网站用的 numbers.js
在飞书表格中增删号码后，GitHub Actions 会自动运行本脚本同步。
"""
import os, sys, json, urllib.request

APP_ID     = os.environ.get('FEISHU_APP_ID', '')
APP_SECRET = os.environ.get('FEISHU_APP_SECRET', '')
BASE_TOKEN = os.environ.get('BASE_TOKEN', 'Vugfbq5D9aR7I5sBholcPFJjnEf')
TABLE_ID   = os.environ.get('TABLE_ID', 'tblZ6EyA2BsJBHgW')
OUTPUT     = os.environ.get('OUTPUT_FILE', 'numbers.js')

def _get_text(val):
    """飞书select字段可能返回字符串或数组，统一取文本"""
    if isinstance(val, list):
        if not val: return ''
        return val[0].get('text', str(val[0])) if isinstance(val[0], dict) else str(val[0])
    return str(val) if val else ''

def get_token():
    url = 'https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal'
    data = json.dumps({'app_id': APP_ID, 'app_secret': APP_SECRET}).encode()
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=30) as r:
        result = json.loads(r.read())
    if result.get('code') != 0:
        raise Exception(f'获取tenant_access_token失败: {result}')
    return result['tenant_access_token']

def get_records(token):
    records = []
    page_token = None
    while True:
        url = f'https://open.feishu.cn/open-apis/bitable/v1/apps/{BASE_TOKEN}/tables/{TABLE_ID}/records?page_size=100'
        if page_token:
            url += f'&page_token={page_token}'
        req = urllib.request.Request(url, headers={'Authorization': f'Bearer {token}'})
        with urllib.request.urlopen(req, timeout=30) as r:
            result = json.loads(r.read())
        if result.get('code') != 0:
            raise Exception(f'读取记录失败: {result}')
        data = result.get('data', {})
        records.extend(data.get('items', []))
        if not data.get('has_more'):
            break
        page_token = data.get('page_token')
    return records

def generate_js(records):
    seg_order = {'4000':0,'4001':1,'4006':2,'4007':3,'4008':4,'4009':5}
    nums = []
    for item in records:
        f = item.get('fields', {})
        status = _get_text(f.get('状态', '在售'))
        if status == '已售':
            continue
        full  = _get_text(f.get('号码', ''))
        seg   = _get_text(f.get('号段', ''))
        level = _get_text(f.get('等级', ''))
        price = f.get('价格', 0)
        if isinstance(price, float) and price.is_integer():
            price = int(price)
        meaning = _get_text(f.get('寓意', ''))
        num = full[len(seg)+1:] if full.startswith(seg+'-') else full
        nums.append({'seg':seg,'num':num,'level':level,'price':price,'meaning':meaning})
    nums.sort(key=lambda x: (seg_order.get(x['seg'], 9), x['num']))

    lines = [
        '/**',
        ' * 共享号码库 numbers.js',
        ' * ============================================================',
        ' * 由飞书多维表格「400号码库」自动同步生成，请勿手动编辑。',
        ' * 在飞书表格中增删号码后，GitHub Actions 自动同步本文件。',
        ' * 字段说明：seg号段 / num后7位 / level等级 / price年预存 / meaning寓意',
        ' * ============================================================',
        ' */',
        'window.PHONE_NUMBERS = [',
    ]
    for i, n in enumerate(nums):
        comma = ',' if i < len(nums) - 1 else ''
        price_val = n['price']
        if isinstance(price_val, (int, float)):
            price_js = str(price_val)
        else:
            price_js = '"' + str(price_val).replace('"', '\\"') + '"'
        meaning_js = str(n['meaning']).replace('"', '\\"')
        lines.append(f'  {{seg:"{n["seg"]}", num:"{n["num"]}", level:"{n["level"]}", price:{price_js}, meaning:"{meaning_js}"}}{comma}')
    lines.append('];')
    return '\n'.join(lines) + '\n'

def main():
    if not APP_ID or not APP_SECRET:
        print('错误：请设置环境变量 FEISHU_APP_ID 和 FEISHU_APP_SECRET')
        sys.exit(1)
    token = get_token()
    records = get_records(token)
    print(f'从飞书读取到 {len(records)} 条号码记录')
    js = generate_js(records)
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'已生成 {OUTPUT}（共 {js.count(chr(10))} 行）')

if __name__ == '__main__':
    main()
