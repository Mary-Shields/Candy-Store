const candy = [
    {
        candyId: '1',
        candyName: 'Jolly Rancher',
        company: "The Hershey's Company",
        firstApp: new Date('1949'),
        weight: '7 oz',
        storePrice: '$2.94',
        customerReview: '4.0',
        seasonSold: '5'
    },
    {
        candyId: '1',
        candyName: 'Life Savers',
        company: "Mars Wrigley",
        firstApp: new Date('1912'),
        weight: '6.25 oz',
        storePrice: '$8.13',
        customerReview: '5.0',
        seasonSold: '1'
    },
    {
        candyId: '1',
        candyName: 'Smarties',
        company: "Smarties Candy Company",
        firstApp: new Date('1937'),
        weight: '1 lb',
        storePrice: '$3.78',
        customerReview: '5.0',
        seasonSold: '5'
    },
    {
        candyId: '1',
        candyName: 'Butterscotch Hard Candy',
        company: "Werther's Original",
        firstApp: new Date('1817'),
        weight: '2.65 oz',
        storePrice: '$1.28',
        customerReview: '5.0',
        seasonSold: '3'
    },
    {
        candyId: '1',
        candyName: 'Hard Candy Necklace',
        company: "Smarties Candy Company",
        firstApp: new Date('1958'),
        weight: '17.7 oz',
        storePrice: '$10.99',
        customerReview: '5.0',
        seasonSold: '4'
    },
    {
        candyId: '2',
        candyName: 'Buncha Crunch',
        company: "Ferrero",
        firstApp: new Date('1994'),
        weight: '3.2 oz',
        storePrice: '$3.49',
        customerReview: '5.0',
        seasonSold: '2'
    },
    {
        candyId: '2',
        candyName: "Hershey's Kisses",
        company: "The Hershey's Company",
        firstApp: new Date('1907'),
        weight: '4.84 oz',
        storePrice: '$2.94',
        customerReview: '5.0',
        seasonSold: '6'
    },
    {
        candyId: '2',
        candyName: 'Kit Kat',
        company: "The Hershey's Company",
        firstApp: new Date('1935'),
        weight: '1.5 oz',
        storePrice: '$1.32',
        customerReview: '5.0',
        seasonSold: '6'
    },
    {
        candyId: '2',
        candyName: 'Whoppers',
        company: "The Hershey's Company",
        firstApp: new Date('1939'),
        weight: '5 oz',
        storePrice: '$1.24',
        customerReview: '5.0',
        seasonSold: '6'
    },
    {
        candyId: '2',
        candyName: "Reese's Peanut Butter Cup",
        company: "The Hershey's Company",
        firstApp: new Date('1928'),
        weight: '1.5 oz',
        storePrice: '$4.97',
        customerReview: '5.0',
        seasonSold: '2'
    },
    {
        candyId: '3',
        candyName: "Gummy Bears",
        company: "Haribo",
        firstApp: new Date('1922'),
        weight: '52 oz',
        storePrice: '$6.52',
        customerReview: '5.0',
        seasonSold: '1'
    },
    {
        candyId: '3',
        candyName: "Gummy Worms",
        company: "Haribo",
        firstApp: new Date('1981'),
        weight: '7.5 oz',
        storePrice: '$4.31',
        customerReview: '4.0',
        seasonSold: '1'
    },
    {
        candyId: '3',
        candyName: "Haribo Goldbears",
        company: "Haribo",
        firstApp: new Date('1922'),
        weight: '4 oz',
        storePrice: '$1.28',
        customerReview: '5.0',
        seasonSold: '1'
    },
    {
        candyId: '3',
        candyName: "Nerds Gummy Clusters",
        company: "The Ferrara Candy Company",
        firstApp: new Date('2020'),
        weight: '8 oz',
        storePrice: '$3.47',
        customerReview: '5.0',
        seasonSold: '1'
    },
    {
        candyId: '3',
        candyName: "Swedish Fish",
        company: "Mondelez International",
        firstApp: new Date('1950'),
        weight: '8 oz',
        storePrice: '$2.94',
        customerReview: '5.0',
        seasonSold: '2'
    },
    {
        candyId: '4',
        candyName: "Peeps",
        company: "Just Born",
        firstApp: new Date('1953'),
        weight: '1.5 oz',
        storePrice: '$7.48',
        customerReview: '1.0',
        seasonSold: '4'
    },
    {
        candyId: '4',
        candyName: "Mallo Cups",
        company: "Boyer Candy Company",
        firstApp: new Date('1936'),
        weight: '3.0 oz',
        storePrice: '$11.35',
        customerReview: '5.0',
        seasonSold: '6'
    },
    {
        candyId: '4',
        candyName: "Rocky Road Bar",
        company: "Annabelle Candy Company",
        firstApp: new Date('1950'),
        weight: '1.8 oz',
        storePrice: '$ 15.69',
        customerReview: '1.0',
        seasonSold: '3'
    },
    {
        candyId: '4',
        candyName: "Goo Goo Cluster",
        company: "Goo Goo Chocolate Company",
        firstApp: new Date('1912'),
        weight: '4.5 oz',
        storePrice: '$11.99',
        customerReview: '4.0',
        seasonSold: '1'
    },
    {
        candyId: '4',
        candyName: "Circus Peanut Marshmallow",
        company: "Spangler Candy Company",
        firstApp: new Date('1800'),
        weight: '5 oz',
        storePrice: '$8.12',
        customerReview: '3.0',
        seasonSold: '4'
    },
    {
        candyId: '5',
        candyName: "Dubble Bubble",
        company: "Tootsie Roll Industries",
        firstApp: new Date('1928'),
        weight: '2.97 lb',
        storePrice: '$13.45',
        customerReview: '5.0',
        seasonSold: '5'
    },
    {
        candyId: '5',
        candyName: "Bubble Yum",
        company: "The Hershey's Company",
        firstApp: new Date('1975'),
        weight: '2.82 oz',
        storePrice: '$1.36',
        customerReview: '5.0',
        seasonSold: '5'
    },
    {
        candyId: '5',
        candyName: "Icebreakers",
        company: "The Hershey's Company",
        firstApp: new Date('1990'),
        weight: '3.24 oz',
        storePrice: '$4.12',
        customerReview: '5.0',
        seasonSold: '5'
    },
    {
        candyId: '5',
        candyName: "Big League Chew",
        company: "Ford Gum",
        firstApp: new Date('1980'),
        weight: '17 oz',
        storePrice: '$20.49',
        customerReview: '5.0',
        seasonSold: '4'
    },
    {
        candyId: '5',
        candyName: "Razzles Gum",
        company: "Tootsie Roll Industries",
        firstApp: new Date('1966'),
        weight: '1.4 oz',
        storePrice: '$2.49',
        customerReview: '5.0',
        seasonSold: '5'
    },
    {
        candyId: '6',
        candyName: "Blow Pop",
        company: "Charms Candy Company",
        firstApp: new Date('1973'),
        weight: '10.4 oz',
        storePrice: '$4.14',
        customerReview: '4.0',
        seasonSold: '2'
    },
    {
        candyId: '6',
        candyName: "Tootsie Pop",
        company: "Tootsie Roll Industries",
        firstApp: new Date('1931'),
        weight: '10.12 oz',
        storePrice: '$4.44',
        customerReview: '4.0',
        seasonSold: '2'
    },
    {
        candyId: '6',
        candyName: "Rock Candy Stick",
        company: "Fun Express",
        firstApp: new Date('1908'),
        weight: '6.35 oz',
        storePrice: '$14.99',
        customerReview: '5.0',
        seasonSold: '2'
    },
    {
        candyId: '6',
        candyName: "Lollipop",
        company: "Tootsie Roll Industries",
        firstApp: new Date('1908'),
        weight: '14.4 oz',
        storePrice: '$11.99',
        customerReview: '4.0',
        seasonSold: '5'
    },
    {
        candyId: '6',
        candyName: "Dum Dum Sucker",
        company: "Spangler Candy Company",
        firstApp: new Date('1924'),
        weight: '16 oz',
        storePrice: '$5.24',
        customerReview: '4.0',
        seasonSold: '6'
    },
    {
        candyId: '7',
        candyName: "Salt Water Taffy",
        company: "Shriver's",
        firstApp: new Date('1880'),
        weight: '1 lb',
        storePrice: '$12.95',
        customerReview: '3.0',
        seasonSold: '1'
    },
    {
        candyId: '7',
        candyName: "Laffy Taffy",
        company: "The Ferrara Candy Company",
        firstApp: new Date('1973'),
        weight: '10 oz',
        storePrice: '$6.85',
        customerReview: '5.0',
        seasonSold: '1'
    },
    {
        candyId: '7',
        candyName: "Mary Jane Taffy",
        company: "Atkinson Candy Company",
        firstApp: new Date('1914'),
        weight: '3 oz',
        storePrice: '$8.45',
        customerReview: '2.0',
        seasonSold: '6'
    },
    {
        candyId: '7',
        candyName: "Airheads",
        company: "PerFetti Van Melle",
        firstApp: new Date('1985'),
        weight: '4.95 oz',
        storePrice: '$2.58',
        customerReview: '5.0',
        seasonSold: '1'
    },
    {
        candyId: '7',
        candyName: "Starburst",
        company: "Mars Wrigley",
        firstApp: new Date('1960'),
        weight: '8 oz',
        storePrice: '$2.88',
        customerReview: '5.0',
        seasonSold: '6'
    },
    {
        candyId: '8',
        candyName: "",
        company: "",
        firstApp: new Date(''),
        weight: '',
        storePrice: '$',
        customerReview: '',
        seasonSold: ''
    },
    {
        candyId: '8',
        candyName: "",
        company: "",
        firstApp: new Date(''),
        weight: '',
        storePrice: '$',
        customerReview: '',
        seasonSold: ''
    },
    {
        candyId: '8',
        candyName: "",
        company: "",
        firstApp: new Date(''),
        weight: '',
        storePrice: '$',
        customerReview: '',
        seasonSold: ''
    },
    {
        candyId: '8',
        candyName: "",
        company: "",
        firstApp: new Date(''),
        weight: '',
        storePrice: '$',
        customerReview: '',
        seasonSold: ''
    },
    {
        candyId: '8',
        candyName: "",
        company: "",
        firstApp: new Date(''),
        weight: '',
        storePrice: '$',
        customerReview: '',
        seasonSold: ''
    },