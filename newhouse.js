function newHouse (input){
    let flowerType = (input[0]);
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch(flowerType){
        case 'Roses':
            price = flowerCount * 5;
            break;
        case 'Dahlias':
            price = flowerCount * 3.80;
            break;
        case 'Tulips':
            price = flowerCount * 2.80;
            break;
        case 'Narcissus':
            price = flowerCount * 3;
            break
        case 'Gladiolus':
            price = flowerCount * 2.50;
            break;
        
        }
if (flowerCount >80 && flowerType === 'Roses'){
    price *= 0.9;
}
else if (flowerCount > 90 && flowerType===`Dahlias`){
    price *= 0.85;
}
else if (flowerCount >80 && flowerType === `Tulips`){
    price *= 0.85;
}
else if (flowerCount < 120 && flowerType === `Narcissus`){
    price *= 1.15;
}
else if (flowerCount < 80 && flowerType === `Gladiolus`){
    price *= 1.2;
}
if (budget <= price){
    let moneyLeft = budget - price;
    console.log (`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left`)
}
else {
    let moneyNeedet = price - budget;
    console.log(`Not enough money, you need ${moneyNeedet.toFixed(2)} leva more.`)

}
}

newHouse(["Roses","55","250"])
// •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// •	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
// •	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
