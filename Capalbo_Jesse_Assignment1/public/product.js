/* Javascript array for products */
 var products =[
    {
        "product": "SLASH",
        "price": 5000.00,
        "description":"fun guy",
        "image": "./images/slash.jpg"
    },
    {
        "product": "JIMMY PAGE",
        "price": 8000.00,
        "image": "./images/jimmy.jpg"
    },
    {
        "product": "EDDIE VAN HALEN",
        "price": 6000.00,
        "image": "./images/eddie.jpg"
    },
    {
        "product": "RANDY RHOADS",
        "price": 3500.00,
        "image": "./images/randy.jpg"
    },
    {
        "product": "STEVIE RAY VAUGHN",
        "price": 4500.00,
        "image": "./images/stevie.jpg"
    },
    {
        "product": "ERIC CLAPTON",
        "price": 10000.00,
        "image": "./images/clapton.jpg"
    },
    {
        "product": "JIMI HENDRIX",
        "price": 20000.00,
        "image": "./images/HENDRIX.jpg"
    },
    {
        "product": "ROCKSTAR FUEL",
        "price": 50.00,
        "image": "./images/jack.jpg"
    }
];
if(typeof module != 'undefined') {
    module.exports.products = products;
}