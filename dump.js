/*
 * dumpdb into json files
 */

'use strict';

//table schema:
//id TEXT PRIMARY KEY ASC, parent_id TEXT, name TEXT, alias TEXT, pinyin TEXT, abbr TEXT, zip TEXT, level INTEGER

(function(db_file){
  var fs = require('fs');

  function dump(err, rows){
    if(err){
      console.log(err);
      return;
    }

    var provinces = rows.filter(function(row){
      return String(row.parent_id).replace('null','') == "";
    });
    
    console.log("Dumping province index......\n");
    fs.writeFileSync('json/index.json', JSON.stringify(provinces));

    console.log("Dumping cities and suburbs......\n");
    provinces.forEach(function(p){
      fs.writeFileSync('json/'+p.id+'.json', JSON.stringify(rows.filter(function(row){
        return row.id != p.id && row.id.substr(0,2) == p.id.substr(0,2);
      })));
    });

    console.log("data dumping ok.\n");
  }

  var sqlite3 = require('sqlite3'), db;
  db = new sqlite3.Database(db_file, sqlite3.READ_ONLY);
  db.all("select * from `regions` order by `id` ASC", dump);
  db.close();
})('regions.db');