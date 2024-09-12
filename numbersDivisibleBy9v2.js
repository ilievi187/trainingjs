function numbersDivisibleBy9v2(input){
    startrange = Number(input[0])
    endrange = Number(input[1])
    let sum =0;
    let buff = "";


    for(let i = startrange; i <= endrange; i++){
    if (i % 9 === 0){
        sum += i
        buff += i+"\n ";
        
        }
    }
    console.log("The sum: "+sum);
    console.log(buff);
}




numbersDivisibleBy9v2(["100","200"]);