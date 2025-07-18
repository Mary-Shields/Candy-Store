
const express = require('express')
const router = express.Router()
const axios = require('axios')

const PORT = process.env.PORT || 3000

router.use(express.static('public'))

router.get('/api', (req, res)=> {
    res.json({
        'All Candy': `http://localhost:${PORT}/api/candy`,
        'All Company': `http://localhost:${PORT}/api/company`,
        'All Weight': `http://localhost:${PORT}/api/weight`,
        'All StorePrice': `http://localhost:${PORT}/api/storeprice`,
        'All CustomerReview': `http://localhost:${PORT}/api/customerreview`,
    })
})

const endpoints = [
    'candy',
    'company',
    'weight',
    'storePrice',
    'customerReview'
]

let candyCount = 0

axios.get(`http://localhost:${PORT}/api/candy/count`).then(resp => candyCount = resp.data.count)


endpoints.forEach(endpoint => {
    router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))

})

router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'Candy Store',
        endpoints
    })
})
router.get('/candyForm', (req, res)=> {
    res.render('pages/candyForm', {
        title: 'candy Form',
        name: 'Add a type of Candy',
        endpoints
    })
})

router.get('/weightForm/:candyId', (req, res)=> {

    const candyId = req.params.candyId

    axios.get(`http://localhost:${PORT}/api/weight`)
        .then(resp => {

            res.render('pages/weightForm', {
                title: 'Weight Amount',
                name: 'Adjust Weight',
                endpoints,
                candyId,
                weight: resp.data
            })

        })
})

for (let i = 0; i < endpoints.length; i++) {
const endpoint = endpoints[i]
if (endpoint == 'candy') {
        router.get(`/${endpoint}`, (req, res)=> {
            
            const url = `http://localhost:${PORT}/api/${endpoint}`

            axios.get(url)
                .then(resp => {
                    res.render('pages/allCandies', {
                        title: 'Candies',
                        name: 'All Candies',
                        data: resp.data,
                        endpoints
                    })
                })
        })

        router.get(`/${endpoint}/:id`, (req,res)=> {

            const id = req.params.id 

            const url = `http://localhost:${PORT}/api/${endpoint}/${id}`

            axios.get(url)
                .then(resp => {
                    let candyName = resp.data.candy_name == null ? `${resp.data.first_name}` : resp.data.candy_name

                    res.render('pages/candySingle', {
                        title: candyName,
                        name: candyName,
                        data: resp.data,
                        count: candyCount,
                        endpoints
                    })
                })
        })

} else if (endpoints.includes(endpoint)) {
        router.get(`/${endpoint}`, (req, res)=> {

            const url = `http://localhost:${PORT}/api/${endpoint}`

            axios.get(url)
                .then(resp => {
                    res.render('pages/allData', {
                        title: endpoint,
                        name: `All ${endpoint}`,
                        data: resp.data,
                        endpoints,
                        category: endpoint
                    })
                })
        })

router.get(`/${endpoint}/:node`, (req, res)=> {

            const node = req.params.node

            const url = `http://localhost:${PORT}/api/${endpoint}/${endpoint}/${node}`

            axios.get(url)
                .then(resp => {
                    res.render('pages/dataSingle', {
                        title: node,
                        name: node,
                        data: resp.data,
                        endpoints
                    })
                })
        })
    } else {
router.all('/{*any}', (req, res)=> {
    res.render('pages/404', {
                title: '404 Error',
                name: '404 Error',
                endpoints
            })
        })

    }


}

module.exports = router 