function tor(input){
    let price = Number(input[0]);
    let transport = Number(input[1]);
    let priceIncrease = Number(input[2]);

    let aneksprice = (price + transport + priceIncrease) * 1.2;
    let facturprice = (aneksprice + 100);
    console.log (aneksprice,facturprice);
}

tor(["670","45","6"]);