function moviedestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let endprice = 0;
    let priceforpics = 0;
    if(season==="Winter"){
        if(destination=== "Dubai"){
            priceforpics=45000
        }else if(destination=== "Sofia"){
            priceforpics=17000
        }else if (destination=== "London"){
            priceforpics=24000
        }
        if(season==="Summer"){
            if (destination=== "Dubai"){
                priceforpics=40000
            }else if (destination=== "Sofia"){
                priceforpics=12500;
            }else if (destination=== "London"){
                priceforpics=20250
            }
        }
    }
    if(destination === "Sofia"){
        endprice=(days*priceforpics)*1.25
    }else if (destination === "Dubai"){
        endprice=(days*priceforpics)*0.70;
    }
     


    let priceleft = budget - endprice;

    if (budget > endprice) {
        console.log(`The budget for the movie is enough! We have ${priceleft.toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(endprice - budget).toFixed(2)} leva more!`);
    }
}

moviedestination(["400000", "Sofia", "Winter", "20"]);