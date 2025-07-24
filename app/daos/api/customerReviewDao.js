const con = require('../../config/dbconfig')

const customerReviewDao = {
    table: 'customerReview',

    findCandyByCustomerReview: (res, table, customerReview)=>{
        con.execute(
            `SELECT c.candy_id, c.candy_name, c.company, c.customer_review
            FROM candy c
            JOIN company c USING (company_id)
            JOIN customer c USING (customer_id)
            JOIN customer_to_review cr ON c.candy_id = cr.candy_id
            JOIN customer c ON cr.customer_review_id = c.customer_review_id
            WHERE c.customer_review = '${customer_review}'
            ORDER BY c.customer_review_id;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(`DAO Error: ${table} `, error)
                }
            }
        )
    }
}

module.exports =  customerReviewDao