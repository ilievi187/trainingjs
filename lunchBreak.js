// Вход
// От конзолата се четат 3 реда:
// 1.	Име на сериал – текст
// 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
// 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
// Изход
// На конзолата да се изпише един ред:
// •	Ако времето е достатъчно да изгледате епизода: 
// "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
// •	Ако времето не Ви е достатъчно:
// "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
// Времето да се закръгли до най-близкото цяло число нагоре.
function lunchBreak(input) {
    let serialsName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = (1 / 8) * breakDuration;
    let leisureDuration = (1 / 4) * breakDuration;

    let freeTime = breakDuration - lunchDuration - leisureDuration;

    if (freeTime >= episodeDuration) {
        let timeLeft = freeTime - episodeDuration;
        console.log(`You have enough time to watch ${serialsName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        let timeNeeded = episodeDuration - freeTime;
        console.log(`You don't have enough time to watch ${serialsName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones", "60", "96"]);






lunchBreak(["Game of Thrones","60","96"])
