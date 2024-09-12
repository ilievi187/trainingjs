// Лято е с много променливо време и Виктор има нужда от вашата помощ. 
// Напишете функция,  която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. 
// Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата.

// Време от денонощието / градуси	
// Morning	
// Afternoon	
// Evening
// 10 <= градуси <= 18	Outfit = Sweatshirt
// Shoes = Sneakers	Outfit = Shirt
// Shoes = Moccasins	Outfit = Shirt
// Shoes = Moccasins
// 18 < градуси <= 24	Outfit = Shirt
// Shoes = Moccasins	Outfit = T-Shirt
// Shoes = Sandals	Outfit = Shirt
// Shoes = Moccasins
// градуси >= 25	Outfit = T-Shirt
// Shoes = Sandals	Outfit = Swim Suit
// Shoes = Barefoot	Outfit = Shirt
// Shoes = Moccasins



function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = "";
    let shoes = "";

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees <= 24) {
        if (timeOfDay == "Morning" || timeOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else {
        if (timeOfDay == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeOfDay == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["22", "Afternoon"]);
