function fishingBoat (input){
let budget = Number (input[0]);
let season = (input[1]);
let fisherCount = Number([2]);
let shipPrice = 0;

switch(season){
    case'Spring':
    shipPrice = 3000;
    break;
    case'Summer':
    case'Autum':
    shipPrice = 4200;
    break;
    case'Winter':
    shipPrice = 2600;
    break;

}
if(fisherCount<=6){
    shipPrice *= 0.9;
}else if(fisherCount<=11){
    shipPrice *= 0.85;
}else{
    shipPrice *= 0.75;
}
if(fisherCount % 2 === 0 && season !== 'Autum'){
    shipPrice *= 0.95;
    
}
if (budget>=shipPrice){
    let moneyLeft = budget - shipPrice;
    console.log(`Yes! You have {останалите пари} leva left`);
}else{
    let moneyNeedet = shipPrice - budget;
    console.log(`Not enough money! You need ${moneyNeedet.toFixed(2)} leva`);
}
}







fishingBoat(["3000","Summer","11"]);