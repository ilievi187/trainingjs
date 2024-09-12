function seriescalculator (input){
let name = input[0]
let seasons = Number(input[1]);
let episodes = Number(input[2]);
let time = Number(input[3]);

let serialtime = (time*1.20);
let specialepisode = seasons*10;
let fulltime = serialtime*episodes*seasons+specialepisode


console.log(`Total time needed to watch the ${name} series is ${fulltime} minutes.`)

}
seriescalculator((["Lucifer","3","18","55"])    )