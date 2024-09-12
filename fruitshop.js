// Магазин за плодове през работните дни работи на следните цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
// Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 
function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let fruitCount = Number(input[2]);
    let fruitPrice;
    let fruitPrice2;
  
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
      switch (fruit) {
        case "banana":
          fruitPrice = 2.50;
          break;
        case "apple":
          fruitPrice = 1.20;
          break;
        case "orange":
          fruitPrice = 0.85;
          break;
        case "grapefruit":
          fruitPrice = 1.45;
          break;
        case "kiwi":
          fruitPrice = 2.70;
          break;
        case "pineapple":
          fruitPrice = 5.50;
          break;
        case "grapes":
          fruitPrice = 3.85;
          break;
        default: console.log("error");
      }console.log((fruitPrice * fruitCount).toFixed(2));
        }else (day === "Sunday" || day === "Saturday")
        switch (fruit) {
        case "banana":
          fruitPrice2 = 2.70;
          break;
        case "apple":
          fruitPrice2 = 1.25;
          break;
        case "orange":
          fruitPrice2 = 0.90;
          break;
        case "grapefruit":
          fruitPrice2 = 1.60;
          break;
        case "kiwi":
          fruitPrice2 = 3.00;
          break;
        case "pineapple":
          fruitPrice2 = 5.60;
          break;
        case "grapes":
          fruitPrice2 = 4.20;
          break;
        default:
          console.log("error");
          break;
      } console.log((fruitPrice2 * fruitCount).toFixed(2));
       }
fruitShop (["apple","Friday","3"]);