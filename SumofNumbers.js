function SumofNumbers(input){
    let numAsString = String(input[0]);
    let sum = 0;
    
    for(let i=0; i<numAsString.length;i++){
        let num = Number(numAsString[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);
}





SumofNumbers(["564321"])