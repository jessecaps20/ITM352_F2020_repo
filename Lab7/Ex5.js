// -- Price depends on quantity
quantity = 3;

switch (true){
    case ( quantity > 0 && quantity < 10): 
        price = 100;
        break;

    case ( quantity >= 10 && quantity < 25): 
        price = 50 ;
        break;

    case ( quantity >= 25 ): 
        price = 35;
        break;
    default:
        return "no purchase";        
}

console.log( quantity + ' products will cost ' + price + ' each.' ) ;
