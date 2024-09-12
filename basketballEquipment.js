function basketballEqipment (input){
    let anualTrainingFee = Number(input[0]);

    let sneakersPrice = 0.6 * anualTrainingFee;
    let outfitPrice = 0.8 * sneakersPrice;
    let basketballPrice =(1 / 4) * outfitPrice;
    let accsesoriesPrice = (1 / 5) * basketballPrice;

    let totalPrice = anualTrainingFee + sneakersPrice + outfitPrice + basketballPrice + accsesoriesPrice;
console.log (totalPrice)
}
basketballEqipment(["365"])