function example (input){

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let sum = 0;
    for (let day =1; day <= days; day++){
        for(let hour =1 ; hour <= hours; hour++)
            if (day % 2 === 0){
                if (hours % 2!==0){
                  sum+=2.50          
                }else{
                    sum+=1.00
                }
                
            }else{
                if (hour % 2 ===0){
                    sum+=1.25;
                }else {
                    sum+= 1.00;
                }
                
            }
    }

    console.log(`Total: ${sum.toFixed(2)} leva`)
}




example([2,5])