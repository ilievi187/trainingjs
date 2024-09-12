function numbersDivisibleBy9(input){
    startrange = Number(input[0])
    endrange = Number(input[1])
    let sum =0;


    for(let i = startrange; i <= endrange; i++){
    if (i % 9 === 0){
        sum += i
        
    }
    }
    console.log("The sum: "+sum);

    for (let i = startrange; i<= endrange;i++){
        if (i % 9 === 0){
            console.log(i)
        }
    }
}




numbersDivisibleBy9(["100","200"]);