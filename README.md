# Chinese regions database

Chinese regions database in sqlite3 format(NBSC last-update: 2014-01-16)

## Getting Started

to install nodejs dependencies:

```
npm --registry=http://registry.cnpmjs.org install
```

and type following command to dump database into json files:
```
node dump.js
```

## Example projects

### [chineserp][crp]
basic API for region picker.

### [chineserp-jquery][crp]
a jQuery plugin which provides sets of wonderful user experience.

## Database schema

### regions table
```sql
  id TEXT PRIMARY KEY ASC, 
  parent_id TEXT, 
  name TEXT, 
  alias TEXT, 
  pinyin TEXT, 
  abbr TEXT, 
  zip TEXT, 
  level INTEGER
```

### dumped JSON object struct:
```javascript
{
  i: '310000', //ID, the unique code of region
  n: '上海市', //Name, the fullname of region
  a: '上海', //Alias, the simplfied name of region
  b: 'SH', //Abbr, the simplfied chinese Pinyin of region
  y: 'ShangHai', //Pinyin, the chinese Pinyin of region
  z: '200000', //Zipcode, the post-code of region
}
```

## Stats

| Version  | Provinces | Cities | Suburbs | Total |
| -------- | --------- | ------ | ------- | ----- |
| 20130831 | 34        | 469    | 2814    | 3317  |
| 20140116 | 34        | 469    | 2816    | 3319  |

## Changes of v2014.01.16

### New Regions:

    扎赉诺尔区,扶余市,溧水区,高淳区,姜堰区,清新区,潮安区,揭东区,临桂区,龙圩区,福绵区,江州区,前锋区,达川区,恩阳区,观山湖区,弥勒市,双湖县,海东市,乐都区,平安县,民和回族土族自治县,互助土族自治县,化隆回族自治县,循化撒拉族自治县,玉树市,阿拉山口市

### Removed Regions:

    扶余县,白下区,下关区,溧水县,高淳县,姜堰市,四方区,胶南市,清新县,潮安县,揭东县,临桂县,蝶山区,江洲区,达县,小河区,弥勒县,海东地区,平安县,民和回族土族自治县,乐都县,互助土族自治县,化隆回族自治县,循化撒拉族自治县,玉树县

Use the [upgrade_to_20140116.sql](upgrade_to_20140116.sql) to upgrade your database. 

## Reference

最新县及县以上行政区划代码（截止2013年8月31日） [National bureau of statistics of china][stats2014]

最新县及县以上行政区划代码（截止2012年10月31日）[National bureau of statistics of china][stats2013]

[stats2013]: http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201301/t20130118_38316.html
[stats2014]: http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201401/t20140116_501070.html
[crp]: https://github.com/xixilive/chineserp
[jcrp]: https://github.com/xixilive/chineserp-jquery