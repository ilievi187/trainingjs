function movieprofit(input){
    let moviname = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let pricefortickets = Number(input[3]);
    let cinemapercent = Number(input[4]);

    let profit=days * tickets *pricefortickets
    let percentforcinema = profit * (cinemapercent/100)
    let realprofit = profit - percentforcinema


    console.log(`The profit from the movie ${moviname} is ${realprofit.toFixed(2)} lv.`)
}


movieprofit(["The Programmer","20","500","7.50","7"])