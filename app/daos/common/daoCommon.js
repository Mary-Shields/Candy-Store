

const con = require('../../config/dbconfig')

const dao = {
findAll: (res, table)=> {
con.query(`SELECT * FROM ${table};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {res.json(...rows)
                    } else {res.json(rows)}
                } else {
                    console.log(`Dao Error: ${table}`, error)
                }
            }
        )
    }, 
findById: (res, table, id)=> {
con.query(`SELECT * FROM ${table} Where ${table}_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {res.json(...rows)
                    } else {res.json(rows)}
                } else {
                    console.log(`Dao Error: ${table}`, error)
                }
            }
        )
    },
sortGeneral: (res, table)=> {
con.query(`SELECT * FROM ${table} ORDER BY ${table};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {res.json(...rows)
                    } else {res.json(rows)}
                } else {
                    console.log(`Dao Error: ${table}`, error)
                }
            }
        )
    }
}

module.exports = dao
