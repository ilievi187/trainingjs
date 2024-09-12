function fishtank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percenttaken = Number(input[3]);

    let volume = lenght*width*height
    let volumeinL = volume / 1000;

    let volumetaken = (percenttaken/100) * volumeinL;

    let volumefree = volumeinL - volumetaken;

    console.log(volumefree);

}



fishtank(["85 ","75 ","47 ","17 "])