// Да се напише функция, която получава час от денонощието(цяло число) и ден от седмицата(текст) и проверява дали офисът на фирма е отворен,
//  като работното време на офисът е от 10-18 часа, от понеделник до събота включително.


function workingHour(input){
    let hours = Number(input[0]);
    let day = (input[1]);

switch (day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
        if (hours >= 10 && hours <= 18){
            console.log ("open")
        }else {
            console.log ("closed");
        }break;
    case "Sunday":{
        console.log ("closed");
    }break;
}





}

workingHour(["11","Monday"])
