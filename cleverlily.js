function cleaverLily (input){
let liliage = Number(input[0]);
let washmashinePrice = Number(input[1]);
let priceForOneToy = Number(input[2]);

let moneysaved = 0;
let moneygift = 10;

for (let birthday = 1;birthday <= liliage; birthday++){
    if (birthday % 2 === 0){
        moneysaved += moneygift - 1;
        moneygift += 10;
    }else{
        moneysaved += priceForOneToy;
    }
}
if (moneysaved >= washmashinePrice){
    console.log(`Yes! ${(moneysaved-washmashinePrice).toFixed(2)}`)
}else{
    console.log(`No! ${(washmashinePrice-moneysaved).toFixed(2)}`)
}
}





cleaverLily(["10","170.00","6"])