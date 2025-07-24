const con = require ('../../config/dbconfig')

const storePriceDao = {
    table: 'storePrice',

    findCandyByStorePrice: (res, table, storePrice)=> {
        con.execute(
            `SELECT c.candy_id, c.candy_name, c.company, c.customer_review, s.store_price
            FROM candy c
            JOIN storePrice s USING (store_price_id)
            JOIN customer_review c USING (customer_review_id)
            WHERE s.storePrice = '${storePrice}'
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

module.exports = storePriceDao