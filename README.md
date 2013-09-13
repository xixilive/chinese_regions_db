# Chinese regions database

Chinese regions database in sqlite3 format(NBSC last-update: 2012-10-31)

## Getting Started

to install nodejs dependencies:

```
npm install
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
> Provinces: 34

> Cities: 469

> Suburbs: 2814

## Reference

最新县及县以上行政区划代码（截止2012年10月31日）[National bureau of statistics of china][stats]

[stats]: http://www.stats.gov.cn/tjbz/xzqhdm/t20130118_402867249.htm
[crp]: https://github.com/xixilive/chineserp
[jcrp]: https://github.com/xixilive/chineserp-jquery