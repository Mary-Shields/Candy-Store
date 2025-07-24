
const con = require ('../../config/dbconfig')

const companyDao = {
    table: 'company',

    findCandyByCompany: (res, table, company)=> {
        con.execute(
            `SELECT c.candy_id, c.candy_name, c.company, c.customer_review
            FROM candy c
            JOIN company c USING (company_id)
            JOIN customer_review c USING (customer_review_id)
            WHERE c.company = '${company}'
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

module.exports = companyDao