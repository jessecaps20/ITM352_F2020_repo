/* Javascript array for products */
 var products =[
    {
        "product": "SLASH",
        "price": 5000.00,
        "link": "<a href=https://www.youtube.com/watch?v=NM5922pkxCs>Click Here To Watch Slash Shred!</a>",       
        "image": "./images/slash.jpg"
    },
    {
        "product": "JIMMY PAGE",
        "price": 8000.00,
        "link": "<a href=https://www.youtube.com/watch?v=nUPubUO4Qgw>Click Here To Watch Jimmy Shred!</a>",    
        "image": "./images/jimmy.jpg"
    },
    {
        "product": "EDDIE VAN HALEN",
        "price": 6000.00,
        "link": "<a href=https://www.youtube.com/watch?v=A2I0a7EwWa8>Click Here To Watch Eddie Shred!</a>",  
        "image": "./images/eddie.jpg"
    },
    {
        "product": "RANDY RHOADS",
        "price": 3500.00,
        "link": "<a href=https://www.youtube.com/watch?v=6fqbKVkhz6U>Click Here To Watch Randy Shred!</a>",  
        "image": "./images/randy.jpg"
    },
    {
        "product": "STEVIE RAY VAUGHN",
        "price": 4500.00,
        "link": "<a href=https://www.youtube.com/watch?v=3m8p2iiplXQ>Click Here To Watch SRV Shred!</a>",  
        "image": "./images/stevie.jpg"
    },
    {
        "product": "ERIC CLAPTON",
        "price": 10000.00,
        "link": "<a href=https://www.youtube.com/watch?v=f0OaH6uYCUg>Click Here To Watch Clapton Shred!</a>",  
        "image": "./images/clapton.jpg"
    },
    {
        "product": "JIMI HENDRIX",
        "price": 20000.00,
        "link": "<a href=https://www.youtube.com/watch?v=cJunCsrhJjg>Click Here To Watch Jimi Shred!</a>",  
        "image": "./images/hendrix.jpg"
    },
    {
        "product": "ROCKSTAR FUEL",
        "price": 50.00, 
        "link": "Make sure your legend stays properly hydrated!", 
        "image": "./images/jack.jpg"
    }
    
];
if(typeof module != 'undefined') {
    module.exports.products = products;
}