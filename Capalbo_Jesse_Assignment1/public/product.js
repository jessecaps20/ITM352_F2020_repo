/* Javascript array for products */

 var products =[
    {
        "guitarist": "SLASH",
        "price": 3500.00,
        "description":"fun guy",
        "image": "./images/slash.jpg",
    },
    {
        "guitarist": "JIMMY PAGE",
        "price": 8000.00,
        "image": "./images/jimmy.jpg"
    },
    {
        "guitarist": "EDDIE VAN HALEN",
        "price": 6000.00,
        "image": "./images/eddie.jpg"
    },
    {
        "guitarist": "STEVIE RAY VAUGHN",
        "price": 4500.00,
        "image": "./images/stevie.jpg"
    },
    {
        "guitarist": "JIMI HENDRIX",
        "price": 10000.00,
        "image": "./images/HENDRIX.jpg"
    },
    {
        "guitarist": "ROCKSTAR FUEL",
        "price": 50.00,
        "image": "./images/jack.jpg"
    }
    
];


if(typeof module != 'undefined') {
    module.exports = products;
}