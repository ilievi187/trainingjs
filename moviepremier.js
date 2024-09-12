function moviepremier(input) {
    let moviename = input[0];
    let packettype = input[1];
    let tickets = Number(input[2]);
    let priceforDrink = 0;
    let priceforPopcorn = 0;
    let priceforMenu = 0;
    let discount = 0;
    let chosedpack = 0;
    let total = 0;

    if (moviename === "John Wick") {
        priceforDrink = 12;
        priceforPopcorn = 15;
        priceforMenu = 19;
    } else if (moviename === "Star Wars") {
        priceforDrink = 18;
        priceforPopcorn = 25;
        priceforMenu = 30;
        if (tickets >= 4) {
            discount = 0.30;
        }
    } else {
        priceforDrink = 9;
        priceforPopcorn = 11;
        priceforMenu = 14;
    }

    if (moviename === "Jumanji" && tickets === 2) {
        discount = 0.15;
    }

    if (packettype === "Drink") {
        chosedpack = priceforDrink;
    } else if (packettype === "Popcorn") {
        chosedpack = priceforPopcorn;
    } else if (packettype === "Menu") {
        chosedpack = priceforMenu;
    }

    total = (chosedpack * tickets);

    if (discount > 0) {
        total *= (1 - discount);
    }

    console.log(`Your bill is ${total.toFixed(2)} leva.`)
}

moviepremier(["John Wick", "Drink", "6"]);