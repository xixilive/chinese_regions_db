/*
 * dumpdb into json files
 */

'use strict';

//table schema:
//id TEXT PRIMARY KEY ASC, parent_id TEXT, name TEXT, alias TEXT, pinyin TEXT, abbr TEXT, zip TEXT, level INTEGER

(function(db_file){
  var fs = require('fs');

  function simplify(data){
    return {
      i: data.id, 
      n: data.name, 
      a: data.alias, 
      y: data.pinyin, 
      b: data.abbr, 
      z: data.zip
    };
  }

  function dump(err, rows){
    if(err){
      console.log(err);
      return;
    }

    var provinces = rows.filter(function(row){
      return String(row.parent_id).replace('null','') == "";
    });
    
    console.log("Dumping province index......\n");
    fs.writeFileSync('json/index.json', JSON.stringify(provinces.map(simplify)));

    console.log("Dumping cities and suburbs......\n");

    provinces.forEach(function(p){
      var regions = rows.filter(function(c){
        return c.parent_id == p.id;
      }).map(simplify)
      .map(function(r){
        r.c = rows.filter(function(s){
          return s.parent_id == r.i;
        }).map(simplify);
        if(r.c.length == 0) delete r.c;
        return r;
      });

      fs.writeFileSync('json/'+p.id+'.json', JSON.stringify(regions));
    });

    fs.writeFileSync('json/last-updated-at', new Date().toString());
    console.log("data dumping ok.\n");
  }

  var sqlite3 = require('sqlite3'), db;
  db = new sqlite3.Database(db_file, sqlite3.READ_ONLY);
  db.all("select * from `regions` order by `id` ASC", dump);
  db.close();
})('regions.db');