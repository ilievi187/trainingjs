// Дадено число е валидно, ако е в диапазона [100…200] или е 0. Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно. 
// Примерен вход и изход
// вход	изход		вход	изход		вход	изход		вход	изход
// (["75"])	invalid		(["150"])	(няма изход)		(["220"])	invalid		(["199"])	(няма изход)

// вход	изход		вход	изход		вход	изход		вход	изход
// (["-1"])	invalid		(["100"])	(няма изход)		(["200"])	(няма изход)		(["0"])	(няма изход)


function InvalidNumber (input){
   let number = Number(input[0]);
    let isvalid = (number >= 100 && number <= 200 || number ===0);

    if (!isvalid){
        console.log("invalid");
    }
}








function InvalidNumber(["200"]);