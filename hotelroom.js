function hotelRoom (input){
let month = input[0];
let nights = Number(input[1]);

let studioPrice =0;
let apartmentPrice =0;

switch(month){
    case `May`:
    case `October`:
studioPrice = nights * 50;
apartmentPrice = nights * 65;

if (nights > 14){
    studioPrice *= 0.70;
}else if (nights > 7){
    studioPrice *= 0.95;
}
break;
    case `June`:
        case `September`:
            studioPrice = nights * 75.20;
            apartmentPrice = nights * 68.70;
            if (nights > 14){
                studioPrice  *= 0.70;
            } else if (nights > 7){
                studioPrice *= 0.95;
            }
            break;
            case 'July':
                case `August`:
                    studioPrice = nights * 76;
                    apartmentPrice = nights * 77;
                    break;
                      
}
if (nights > 14){
    apartmentPrice *= 0.9;
}
console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

hotelRoom(["May","15"])









// Май и октомври	Юни и септември	Юли и август
// Студио – 50 лв./нощувка	Студио – 75.20 лв./нощувка	Студио – 76 лв./нощувка
// Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
