function foodDelivery(input){
    let chikenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegMenus = Number(input[2]);
    
    
    let menusPrice = chikenMenus * 10.35 + fishMenus *12.40 + vegMenus * 8.15;
    let dessertPrice = (20/100) * menusPrice;
    let totalPrice = menusPrice + dessertPrice +2.5;

    console.log(totalPrice);
    
    
    
}

foodDelivery(["2","4","3"]);