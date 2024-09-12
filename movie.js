// Premiere – премиерна прожекция, на цена 12.00 лева.

// · Normal – стандартна прожекция, на цена 7.50 лева.

// · Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.

// Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. 
// Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.

function movie (input){

    let typeProject = (input[0]);

    if (type == "Premiere"){
        income = rows * colums * 12;
    }else if (type == "Normal"){
        income = rows * colums *7.50;
    }else if (type == "Discount"){
        income = rows * colums *5;
    }
    console.log (income);

}



movie(["Premiere","10","12"])