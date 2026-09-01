/**
 * 共享号码库 numbers.js
 * ============================================================
 * 由 400选号大厅.html 与 index.html（首页每日靓号）共同引用。
 * 字段说明：
 *   seg     : 号段，可选 4000/4001/4006/4007/4008/4009
 *   num     : 后7位号码（3位-4位），完整号码 = seg + '-' + num
 *   level   : 号码等级：优选 / 精品 / 顶级 / 超级
 *   price   : 年预存参考价（元）
 *   meaning : 寓意与说明
 * 增删号码只需改本文件，选号大厅与首页每日靓号自动同步。
 * 维护建议：同一号段号码相邻排列，便于检查；避免重复号码。
 * ============================================================
 */
window.PHONE_NUMBERS = [
  {seg:"4000", num:"888-6688", level:"顶级", price:8000,  meaning:"尾号6688双叠，顺利发财，记忆成本低，适合广告投放"},
  {seg:"4000", num:"666-8899", level:"精品", price:5000,  meaning:"666顺+88发+99久，三连吉祥组合"},
  {seg:"4000", num:"518-5188", level:"精品", price:4500,  meaning:"我要发发，谐音吉祥，适合零售电商"},
  {seg:"4000", num:"168-1688", level:"精品", price:4000,  meaning:"一路发发，电商企业首选数字组合"},
  {seg:"4000", num:"520-5200", level:"优选", price:2000,  meaning:"我爱你，适合婚恋、礼品行业"},
  {seg:"4000", num:"100-1000", level:"优选", price:1800,  meaning:"满分寓意，千里挑一，适合教育培训"},
  {seg:"4000", num:"246-2468", level:"精品", price:3800,  meaning:"偶数顺子，好事成双"},
  {seg:"4000", num:"386-3860", level:"优选", price:1600,  meaning:"朗朗上口，记忆方便"},
  {seg:"4001", num:"123-4567", level:"顶级", price:12000, meaning:"ABCD全顺子，朗朗上口，品牌传播佳"},
  {seg:"4001", num:"100-0000", level:"顶级", price:10000, meaning:"尾号0000，圆满归一"},
  {seg:"4001", num:"135-1357", level:"精品", price:4200,  meaning:"奇数顺子重复，适合科技、创新企业"},
  {seg:"4001", num:"365-2424", level:"优选", price:2200,  meaning:"365天24小时，全天候服务，适合物流应急"},
  {seg:"4001", num:"520-1314", level:"精品", price:5200,  meaning:"我爱你一生一世，浪漫组合"},
  {seg:"4001", num:"678-6789", level:"精品", price:3800,  meaning:"顺子加码，步步高升"},
  {seg:"4001", num:"789-7890", level:"精品", price:3500,  meaning:"ABC重复，持续上升"},
  {seg:"4001", num:"028-2828", level:"优选", price:1800,  meaning:"ABAB重复，易发易发"},
  {seg:"4006", num:"668-6688", level:"顶级", price:8800,  meaning:"全号重复6688，顺利发财，品牌展示佳"},
  {seg:"4006", num:"989-8989", level:"精品", price:4200,  meaning:"就发就发，ABAB节奏强"},
  {seg:"4006", num:"756-5678", level:"精品", price:4800,  meaning:"顺子5678，我顺我发"},
  {seg:"4006", num:"838-3838", level:"精品", price:3000,  meaning:"生发生发，适合美容健康行业"},
  {seg:"4006", num:"586-5860", level:"优选", price:2000,  meaning:"我发了，简单好记"},
  {seg:"4006", num:"991-9900", level:"优选", price:2600,  meaning:"久久圆满，连对组合"},
  {seg:"4006", num:"316-8899", level:"优选", price:3000,  meaning:"顺发组合，88发99久"},
  {seg:"4006", num:"445-5566", level:"优选", price:2400,  meaning:"连对顺顺（含4，价格实惠）"},
  {seg:"4007", num:"765-4321", level:"顶级", price:11000, meaning:"倒顺子4321，稀缺度高"},
  {seg:"4007", num:"889-6688", level:"精品", price:5200,  meaning:"发发久+顺利发财"},
  {seg:"4007", num:"168-0000", level:"精品", price:3800,  meaning:"一路发+圆满归一"},
  {seg:"4007", num:"986-8868", level:"精品", price:3600,  meaning:"久久发发发"},
  {seg:"4007", num:"335-3344", level:"优选", price:2200,  meaning:"连对，生生世世"},
  {seg:"4007", num:"121-2121", level:"优选", price:2000,  meaning:"ABAB，节奏感强"},
  {seg:"4007", num:"480-4848", level:"优选", price:1500,  meaning:"ABAB（含4，价格实惠）"},
  {seg:"4007", num:"926-9260", level:"优选", price:2400,  meaning:"就爱顺，易记"},
  {seg:"4008", num:"888-8888", level:"超级", price:20000, meaning:"AAAA顶级叠号，行业龙头之选"},
  {seg:"4008", num:"999-8888", level:"顶级", price:12000, meaning:"999长久+8888发财"},
  {seg:"4008", num:"456-7890", level:"顶级", price:9500,  meaning:"4567+7890双顺子，稀缺"},
  {seg:"4008", num:"200-0000", level:"顶级", price:9800,  meaning:"200满分+0000圆满"},
  {seg:"4008", num:"010-0100", level:"优选", price:1500,  meaning:"北京区号关联"},
  {seg:"4008", num:"866-6688", level:"精品", price:5600,  meaning:"发顺顺+顺利发财"},
  {seg:"4008", num:"588-5880", level:"优选", price:2800,  meaning:"我发发我发"},
  {seg:"4008", num:"688-8868", level:"精品", price:4600,  meaning:"顺发发发发"},
  {seg:"4009", num:"556-7788", level:"精品", price:4800,  meaning:"顺顺发发，连对组合"},
  {seg:"4009", num:"131-4520", level:"精品", price:5500,  meaning:"一生一世我爱你，浪漫组合"},
  {seg:"4009", num:"021-0210", level:"优选", price:1500,  meaning:"上海区号关联"},
  {seg:"4009", num:"578-5678", level:"精品", price:4000,  meaning:"顺子5678，朗朗上口"},
  {seg:"4009", num:"993-9900", level:"优选", price:2600,  meaning:"久久久圆满"},
  {seg:"4009", num:"168-8888", level:"顶级", price:11000, meaning:"一路发+8888叠号"},
  {seg:"4009", num:"616-6688", level:"精品", price:4200,  meaning:"顺一路顺发财"},
  {seg:"4009", num:"006-0006", level:"优选", price:2000,  meaning:"六六大顺，圆满组合"}
];
