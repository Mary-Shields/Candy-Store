const con = require ('../../config/dbconfig')

const candyDao = {
    table: 'candy',

    findCandy: (res, table, candy)=> {
        con.execute(
            `SELECT c.candy_id, c.candy_name, c.company, c.customer_review, w.weight_id
            FROM candy c
            JOIN candy c USING (candy_id)
            JOIN customer_review c USING (customer_review_id)
            WHERE c.candy = '${candy}'
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

module.exports = candyDao