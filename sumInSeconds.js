// // Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
// Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
// Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). 
function sumInSeconds (input){
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let totaltimeInSeconds = time1 + time2 + time3;

    let minutes = Math.floor(totaltimeInSeconds / 60);
    let seconds =totaltimeInSeconds % 60;

    if (seconds>=10){
        console.log(`${minutes}:${seconds}`); 
    }else{
        console.log(`${minutes}:0${seconds}`);
    }
    
}

sumInSeconds(["35","45","44"])



