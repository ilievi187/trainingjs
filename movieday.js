function movieday (input){
    let preparation = Number(input[0])*0.15;
    let time = Number(input[0]);
    let scenes = Number(input[1]);
    let scenetime = Number(input[2]);

    let requiredtime = preparation+(scenes*scenetime);
    let timeneedet = 0;

    if (requiredtime>time){
        timeneedet = requiredtime - time;
    }else{
        timeneedet = time -requiredtime;
    }

    if (requiredtime < time){
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeneedet)} minutes left!`);

    }else{
        console.log(`Time is up! To complete the movie you need ${Math.round(timeneedet)} minutes.`);
    }




}

movieday(["60","15","3"])
    