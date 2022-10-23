// Functions

// Function Without Parameters
function multiplicationTwoNums() {

    var a = 5;
    var b = 10;
    console.log("5 * 10 = ", a * b);
}

// Function With Parameters
function addNums(firstNum, secondNum) {

    var result = firstNum + secondNum;
    console.log(firstNum + ' + ' + secondNum + ' = ' + result);
}

// *** Function Override ***
function addNums(firstNum, secondNum, thirdNum) {

    var result = firstNum + secondNum + thirdNum;
    console.log("Result = ", result);
}

// *** Function Override ***
var newMessage = function(message) {
    console.log(message);
}

// Function Calling
multiplicationTwoNums();

// Calling Overriding Function
addNums(15, 20);
addNums(15, 20, 10);

// Calling Overriding Function
newMessage("Hello");
newMessage("Hi");



// Arrays

var train1 = ["Salt", "Wheat", "Sugar", "Milk"];
var train2 = ["Banana", "Apple", "Peach", "Tomato", "Potato"];

console.log("\nTrain 1 Items: ", train1[0], train1[1], train1[2], train1[3]);

console.log("\nTrain 2 Items:");
for (var i = 0; i < train2.length; i++) {
    console.log(train2[i]);
}



// Examples

// 1 - Colors Array Listing with Function
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + ".", "Array", "item:", arr[i]);
    }
}

colors = ["red", "yellow", "green", "blue", "black", "orange", "pink"];
listArrayItems(colors);

// 2 - Letter Finder Function
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("\nFound the", match, "at", i);
        } else {
            console.log("\n---No match found at", i);
        }
    }
}

var string = 'test';
letterFinder(string, 't');



// Objects

// Nesne Oluşturma Yöntemleri
// ********************* YÖNTEM 1
var heavyArmoredCavalry = {
    movement: 7,
    armor: 90,
    health: 120,
    power: 95
};
// ********************* YÖNTEM 1

var spearman = {
    movement: 5,
    armor: 60,
    health: 100,
    power: 75
};

var crossbowman = {
    movement: 4,
    armor: 40,
    health: 90,
    power: 120
};

// ********************* YÖNTEM 2
var farmer = {};
farmer.movement = 5;
farmer.armor = 15;
farmer.health = 75;
farmer.power = 30;
// ********************* YÖNTEM 2


// ********************* YÖNTEM 3
var scout = {}
scout["movement"] = 7;
scout['armor'] = 25;
scout["health"] = 90;
scout.health = 85; // Aynı özelliğe ait iki farklı değerden yöntem farketmeksizin en altta atanan değer geçerli olur
scout.power = 40;
scout['power'] = 45; // Aynı özelliğe ait iki farklı değerden yöntem farketmeksizin en altta atanan değer geçerli olur
// ********************* YÖNTEM 3

console.log("\nHeavy Armored Cavalry Properties:",
    "\nMovement:", heavyArmoredCavalry.movement,
    "\nArmor:", heavyArmoredCavalry.armor,
    "\nHealth:", heavyArmoredCavalry.health,
    "\nPower:", heavyArmoredCavalry.power);

// Nesneye yeni özellik ekleme
heavyArmoredCavalry.range = 50;

console.log("\nHeavy Armored Cavalry Properties:",
    "\nMovement:", heavyArmoredCavalry.movement,
    "\nArmor:", heavyArmoredCavalry.armor,
    "\nHealth:", heavyArmoredCavalry.health,
    "\nPower:", heavyArmoredCavalry.power,
    "\nRange:", heavyArmoredCavalry.range);

console.log("\n", heavyArmoredCavalry);

// Nesne özelliğinin değerini güncelleme
heavyArmoredCavalry.movement = 6;

console.log("\n", heavyArmoredCavalry);

console.log("\n Scout Unit Properties:", scout);


var arrOfKeys = ["speed", "altitude", "color", "price"];
var drone = {
    speed: 100,
    altitude: 200,
    color: 'red',
    price: '1000$'
};
// drone.speed = 100;
// drone.altitude = 200;
// drone.color = 'red';
// drone.price = '1000$';

for (var i = 0; i < arrOfKeys.length; i++) {
    console.log("\nDrone's", arrOfKeys[i] + ":", drone[arrOfKeys[i]]);
}



// Arrays are Objects
// push() ve pop()

// push() ---> Dizi sonuna eleman ekler
var basket = [];
basket.push("apple");
basket.push("pear");
basket.push("peach");
basket.push("banana", "orange");
console.log("\nBasket: ", basket);

// pop() ---> Dizi sonundaki elemanı diziden çıkarır
basket.pop();
basket.pop();
console.log("\nBasket: ", basket);

// Example
var simpleArray = [];

function arrayBuilder(item) {
    simpleArray.push(item);
    return simpleArray;
}

simpleArray = arrayBuilder("one");
simpleArray = arrayBuilder("two");
simpleArray = arrayBuilder("three");
console.log("\nMy Simple Array:", simpleArray);


// Math Objects Cheatsheet

// *** Number constants ***

// The PI number: Math.PI 
// The Euler's constant: Math.E 
// The natural logarithm of 2: Math.LN2


// *** Rounding methods ***

// Math.ceil() - rounds up to the closest integer 
// Math.floor() - rounds down to the closest integer 
// Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
// Math.trunc() - trims the decimal, leaving only the integer


// *** Arithmetic and calculus methods ***

// Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 
// Math.sqrt(16) - calculates the square root of 16, the result is 4 
// Math.cbrt(8) - finds the cube root of 8, the result is 2 
// Math.abs(-10) - returns the absolute value, the result is 10 
// Logarithmic methods: Math.log(), Math.log2(), Math.log10() 
// Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.
//  Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.

var decimal = Math.random(); // 0 ve 0.99 arasında rastgele bir decimal sayı üretir

console.log("\n", decimal);
console.log("\n", decimal * 100);
console.log("\n", Math.round((decimal * 100))); // 0 ile 100 arasında rastgele bir integer sayıyı ekrana yazdıran kod satırı



// Strings are not Objects

var greeting = "Hello";
var name = "Kaan";

// console.log("\n", greeting.push(name)); // Stringler dizi olmadıkları için bu şekilde birleştirilemezler
console.log("\n", greeting + name);
console.log("\n", greeting.concat(name)); // *** concat() ***


// String Cheatsheet

var greetingByName = greeting.concat(" ").concat(name);
console.log("\n", greetingByName);

console.log("\nLength:", greetingByName.length);

console.log("\nString'in 0. elemanı:", greetingByName.charAt(0)); // *** charAt() ***

console.log("\n", greetingByName.concat(" and Ahmet")); // *** concat() ***

var laugh = "ho-ho-ho";

console.log("\n", laugh.indexOf('h')); // *** indexOf() ---> String içindeki aranan karakterin bulunduğu ilk indisi döndürür ***
console.log("\n", laugh.indexOf('o')); // *** indexOf()
console.log("\n", laugh.indexOf('-')); // *** indexOf()

console.log("\n", laugh.lastIndexOf('-')); // *** lastIndexOf() ---> String içindeki aranan karakterin bulunduğu son indisi döndürür ***

var splittedLaugh = laugh.split('-'); // *** split() ---> İstenilen karaktere göre stringi parçalar ***
console.log("\n", splittedLaugh);

console.log("\n", greetingByName.toLowerCase()); // *** toLowerCase() ---> String ifadenin tüm harflerini küçük olarak ayarlar ***
console.log("\n", greetingByName.toUpperCase()); // *** toUpperCase() ---> String ifadenin tüm harflerini büyük olarak ayarlar ***


// Exercise
console.log("\n----------------------------EXERCISE----------------------------");

var clothes = [];
clothes.push("T-shirt", "Jacket", "Trousers", "Sweatshirt", "Socks");
clothes.pop();
clothes.push("Hat");

console.log(clothes);
console.log(clothes[2]);

var favCar = {};
favCar.color = "black";
favCar.covertible = true;

console.log(favCar);
console.log("----------------------------------------------------------------");


// Objects Methods

var robotVacuumCleaner = {
    color: 'white',
    price: '250 Dollar',

    run: function(control) {
        if (control != undefined) {
            console.log("The robot vacuum cleaner is running");
        } else {
            console.log("Run failed");
        }
    }
};

robotVacuumCleaner.lightsOn = function() {
    console.log("The lights are on");
};

console.log(robotVacuumCleaner);
robotVacuumCleaner.run("Success");
robotVacuumCleaner.lightsOn();


// ***** typeOf() ******
console.log("\ntypeOf Kullanımı:");
console.log("-----------------");
console.log(typeof(robotVacuumCleaner));
console.log(typeof(robotVacuumCleaner.color));
console.log(typeof(favCar.covertible));
console.log(typeof(robotVacuumCleaner.run));
console.log(typeof(drone));
console.log(typeof(arrOfKeys));
console.log(typeof(farmer.movement));
console.log(typeof(multiplicationTwoNums));
console.log(typeof(simpleArray));