function familyVacation(input){
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricefornights = 0;
    let addexpenses = budget*Number(input[3]/100);

    if (nights > 7){
        pricefornights = pricefornights*0.95;
    }else{
        pricefornights = Number(input[2]);
    }

    let total = budget - nights * pricefornights +addexpenses;
    if (total > budget){
        console.log(`Ivanovi will be left with ${total.toFixed(2)} leva after vacation`)
    }else{
        console.log(`"${total.toFixed(2)} leva needed."`)
    }
    
}
familyVacation(["800.50","8","100","2"])