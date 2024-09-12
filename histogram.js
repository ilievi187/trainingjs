function histogram (input){
    let n = Number(input[0]);
    let groupCount = 0;
    let groupCount1 = 0;
    let groupCount2 = 0;
    let groupCount3 = 0;
    let groupCount4 = 0;

    for(let idx = 1; idx <= n; idx++){
        let num = (input[idx]);
        
        if (num<200){
            groupCount++;
        }else if (num<=399){
            groupCount1++;
        }else if (num <=599){
            groupCount2++;
        }else if (num <=799){
            groupCount3++;
        }else{
            groupCount4++;
        }
    }
 let group1Percent = (groupCount / n) * 100;
 let group2Percent = (groupCount1 / n) * 100;
 let group3Percent = (groupCount2 / n) * 100;
 let group4Percent = (groupCount3 / n) * 100;
 let group5Percent = (groupCount4 / n) * 100;

 console.log(`${group1Percent.toFixed(2)}%`);
 console.log(`${group2Percent.toFixed(2)}%`);
 console.log(`${group3Percent.toFixed(2)}%`);
 console.log(`${group4Percent.toFixed(2)}%`);
 console.log(`${group5Percent.toFixed(2)}%`);

}



histogram(["7", "800", "801", "250", "199", "399", "599", "799"])