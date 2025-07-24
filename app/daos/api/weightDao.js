const con = require ('../../config/dbconfig')

const weightDao = {
    table: 'weight',

    findCandyByWeight: (res, table, weight)=> {
        con.execute(
            `SELECT c.candy_id, c.candy_name, c.company, c.customer_review, w.weight_id
            FROM candy c
            JOIN weight w USING (weight_id)
            JOIN customer_review c USING (customer_review_id)
            WHERE w.weight = '${weight}'
            ORDER BY c.candy_id;`,
            (error, rows)=> {
                if (!error) {
                    res.json(rows)
                } else {
                    console.log(`DAO Error: ${table}`, error)
                }
            }
        )
    }
}

module.exports = weightDao