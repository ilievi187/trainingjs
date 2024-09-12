function vacationBooks(input){
    let pagesInBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number (input[2]);
    let totalHours = pagesInBook / pagesPerHour;
    let hoursPerDay = totalHours / days;
    console.log(hoursPerDay);
}

vacationBooks(["212", "20" , "2"])