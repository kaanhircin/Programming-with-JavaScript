// CONDITIONALS

// if, else conditional statements
var result = 50;

if (result > 40) {
    console.log("You passed the test");
} else {
    console.log("You did not pass the test");
}

// if, else if, else conditional statements
var place = 'third';

if (place == 'first') {
    console.log("Gold medal");
} else if (place == 'second') {
    console.log("Silver medal");
} else if (place == 'third') {
    console.log("Bronze medal");
} else {
    console.log("No medal");
}

// switch statement
var favoriteNumber = 6;

switch (favoriteNumber) {
    case 1:
        console.log("Your favorite number = ", favoriteNumber);
        break;
    case 2:
        console.log("Your favorite number = ", favoriteNumber);
        break;
    case 3:
        console.log("Your favorite number = ", favoriteNumber);
        break;
    case 4:
        console.log("Your favorite number = ", favoriteNumber);
        break;
    case 5:
        console.log("Your favorite number = ", favoriteNumber);
        break;
    default:
        console.log("Your favorite number is greater than 5");
}

// ***NOTE*** Koşulda ikili seçim varsa if, else if, else kullanmak daha avantajlı olabilir
// ***NOTE*** Çok sayıda olası sonuç varsa Switch kullanmak daha avantajlı olabilir

// Contidional Statements Example
var age = 18;

if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

// Switch statement Example
var day = 'Sunday';
var activity = "Chill";

switch (day) {
    case 'Monday':
        console.log("Read a book");
        break;
    case 'Tuesday':
        console.log("Watch a movie");
        break;
    case 'Wednesday':
        console.log("Read a book");
        break;
    case 'Thursday':
        console.log("Play basketball");
        break;
    case 'Friday':
        console.log("Socialize");
        break;
    case 'Saturday':
        console.log(activity);
        break;
    case 'Sunday':
        console.log(activity);
        break;
    default:
        console.log("There is no such day");
}



// LOOPS

// for loops
for (var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log('Go!\n');

for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy New Year!\n");

// while loops
var counter = 3;

while (counter > 0) {
    console.log(counter);
    // counter = counter - 1; // Alternatif
    counter -= 1;
}
console.log("Time is up!\n");

// Loops Exercises

// 1
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Counting completed! 1\n");

// 2
for (var j = 5; j > 0; j--) {
    console.log(j);
}
console.log("Countdown finished! 2\n");

// 3
var counter1 = 1;

while (counter1 <= 5) {
    console.log(counter1)
    counter1++;
}
console.log("Counting completed! 3\n");

// 4
var counter2 = 5;

while (counter2 >= 1) {
    console.log(counter2);
    counter2--;
}
console.log("Countdown finished! 4\n");

// 5
var counter3 = 2018;

while (counter3 < 2023) {
    console.log(counter3);
    counter3++;
}
console.log("Counting completed! 5\n");

// Nested Loops - İç İçe Döngüler - Program çalışma hızına olumsuz etkide bulunurlar
// Çarpım Tablosu Örneği
console.log("Çarpım Tablosu Örneği:");
console.log("----------------------");

for (var firstNumber = 0; firstNumber <= 10; firstNumber++) {
    for (var secondNumber = 0; secondNumber <= 10; secondNumber++) {
        console.log(firstNumber + ' x ' + secondNumber + ' = ' + firstNumber * secondNumber);
    }
}

// Conditionals & Loops Exercises

// 1 - Loop ve if, else if, else
console.log("_____________");
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold Medal");
    } else if (i == 2) {
        console.log("Silver Medal");
    } else if (i == 3) {
        console.log("Bronze Medal");
    } else {
        console.log(i);
    }
}

// 2 - Loop ve switch
console.log("_____________");
for (var i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold Medal");
            break;
        case 2:
            console.log("Silver Medal");
            break;
        case 3:
            console.log("Bronze Medal");
            break;
        default:
            console.log(i);
    }
}