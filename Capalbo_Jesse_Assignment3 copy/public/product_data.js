
var rockstar_array = [ 
    {
        "item": "<a href=/rockstars/Slash.html>Slash</a>",
        "price": 2000,
        "image": "slash.jpg",   
    },
    {
        "item": "<a href=/rockstars/JimmyPage.html>Jimmy Page</a>",
        "price": 1500,
        "image": "jimmy.jpg",  
    },
    {
        "item": "<a href=/rockstars/JimiHendrix.html>Jimi Hendrix</a>",
        "price": 5000,
        "image": "hendrix.jpg",   
    },
    {
        "item": "<a href=/rockstars/StevieRayVaughn.html>Stevie Ray Vaughn</a>",
        "price": 3000,
        "image": "stevie.jpg",
        
    },
    {
        "item": "<a href=/rockstars/EricClapton.html>Eric Clapton</a>",
        "price": 1500,
        "image": "clapton.jpg",   
    },
    {
        "item": "<a href=/rockstars/EddieVanHalen.html>Eddie Van Halen</a>",
        "price": 2500,
        "image": "eddie.jpg",   
    },
    {
        "item": "<a href=/rockstars/JohnMayer.html>John Mayer</a>",
        "price": 7500,
        "image": "john.jpg",   
    },
    {
        "item": "<a href=/rockstars/JerryGarcia.html>Jerry Garcia</a>",
        "price": 3000,
        "image": "jerry.jpg",  
    },
    {
        "item": "<a href=/rockstars/JackWhite.html>JackWhite</a>",
        "price": 4000,
        "image": "jackwhite.jpg",   
    }
];
var venue_array = [ 
    {
        "item":"<a href=/venues/RedRocksAmpetheatre.html>Red Rocks Ampetheatre</a>",
        "price": 10000,
        "image":"redrocks.jpg"
    },
    {
        "item":"<a href=/venues/TheHollywoodBowl.html>The Holly Wood Bowl</a>",
        "price": 15000,
        "image":"hollywoodbowl.jpg"
    },
    {
        "item":"<a href=/venues/TheTroubador.html>The Troubador</a>",
        "price": 3500,
        "image":"Troubador.jpg"
    },
    {
        "item":"<a href=/venues/Cbgb.html>CBGB</a>",
        "price": 1000,
        "image":"cbgb.jpg"
    },
    {
        "item":"<a href=/venues/BrooklynSteel.html>Brooklyn Steel</a>",
        "price": 2500,
        "image":"brooklyn.jpg"
    },
    {
        "item":"<a href=/venues/ElClub.html>The Viper Room</a>",
        "price": 1500,
        "image":"viper.jpg"
    }
];
var products_array = {  
    "Rockstars": rockstar_array,
    "Venues": venue_array,   
}
if(typeof module != 'undefined') {
    module.exports.products_array = products_array;
  }
