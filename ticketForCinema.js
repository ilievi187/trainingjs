// Да се напише функция, която получава ден от седмицата (текст) и принтира на конзолата цената на билет за кино според деня от седмицата:
// Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
// 12	12	14	14	12	16	16

function ticketForCinema (input){
    let day = (input[0]);
    
    switch (day){
    case "Monday":{
        console.log ("12");
    }break;
    case "Tuesday":{
        console.log ("12");
    }break;
    case "Wednesday": {
        console.log ("14");
    }break;
    case "Thursday":{
        console.log ("14");
    }break;
    case "Friday":{
        console.log ("12");
    }break;
    case "Saturday":{
        console.log ("16");
    }break;
    case "Sunday":{
        console.log ("16");
    }break;
}
}

ticketForCinema(["Thursday"]);