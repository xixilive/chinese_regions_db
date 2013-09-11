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

## Database schema

```sql
//table: regions
id TEXT PRIMARY KEY ASC, parent_id TEXT, name TEXT, alias TEXT, pinyin TEXT, abbr TEXT, zip TEXT, level INTEGER
```

## Stats
> Provinces: 34
> Cities: 469
> Suburbs: 2814

## Reference

最新县及县以上行政区划代码（截止2012年10月31日）National bureau of statistics of china

http://www.stats.gov.cn/tjbz/xzqhdm/t20130118_402867249.htm