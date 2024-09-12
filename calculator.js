function calculator(input){
    let sum1 = Number(input["0"]);
    let sum2 = Number(input["1"]);
    let sum3 = Number(input["2"]);
    let sum4 = Number(input["3"]);
    let sum5 = Number(input["4"]);
    let sum6 = Number(input["5"]);

    let totalsum = Number((sum1 + sum2 + sum3 +sum4 +sum5 +sum6)*1.2);
    console.log(totalsum);
}
calculator(["25480","384","7280","28060","19080","1440"]); 