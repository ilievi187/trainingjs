function schoolSupplies(input){

    let penPacketCount = Number(input[0]);
    let markerPackets = Number(input[1]);
    let detergentLiters =Number(input[2]);
    let discountPercent =Number(input[3]) / 100;

    let price = penPacketCount * 5.8 + markerPackets * 7.20 + detergentLiters * 1.2;
    let discount = discountPercent * price;

    let finalPrice = price - discount;

    console.log(finalPrice)

}

schoolSupplies(["2","3","4","25"]);