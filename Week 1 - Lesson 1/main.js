// Single Line Comment - Tekli Yorum Satırı

/*
    Multiple
    Line
    Comments
    -
    Çoklu
    Yorum
    Satırı
*/

// Konsol - Terminal ekranına yazı yazdırmak
console.log("\nKonsol ekranına yazı yazdırmak:\n-------------------------------");

console.log('Hello World'); // Konsol ekranına - Termianale yazı yazdırmak

console.log("%cHello World", "color: blue; font-size: 40px;"); // Konsol ekranına yazıları biçimlendirerek yazdırmak (Tarayıcılarda çalışıyor) 

console.log("Hello", "World"); // Kelimelerin arasına boşluk ekleyerek konsola yazdırır

console.log("Hello" + "World"); // Kelimelerin arasına boşluk eklemeden konsola yazdırır

console.log("Hello " + "World");

// Variables - Değişkenler
console.log("\nDeğişken Tanımlama:\n-------------------");

var person = "John"; // Değişken tanımlama

console.log("Hello", person);

var greeting = "Hello"; // Değişken tanımlama

console.log(greeting, person)

greeting = "Hi"; // Değişken değerini değiştirme - Değişkene yeni değer atama

console.log(greeting, person);

person = "James"; // Değişken değerini değiştirme - Değişkene yeni değer atama

console.log(greeting, person);

// Variables Exercise
console.log("\nDeğişken Tanımlama Örneği:\n--------------------------");

var petDog = "Rex";
var petCat = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is", petDog);
console.log("My pet cat's name is", petCat);

var dogSound = "woof";
var catSound = "purr";

console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow";

console.log(petCat, "now says", catSound, "\n");

// " " ile ' ' kullanımının herhangi bir farkı yoktur
var exText = "Lorem";

exText = 'Lorem ipsum';

console.log(exText);

// Data Types

/*
    Primitive Data Types in JavaScript 
    1) String - characters or texts
    2) Number - Integers or decimals
    3) Boolean - true or false
    4) Null - Bir değerin olmaması
    5) Undefined - Atanmamış / Tanımlanmamış değer
    6) BigInt - Çok geniş sayı aralığı 2^53
    7) Symbol - Benzersiz tanımlayıcı
*/

/*
    Operators
    1) =    Atama operatörü

    Aritmetik Operatörler
    1) +    Toplama
    2) -    Çıkarma
    3) *    Çarpma
    4) /    Bölme
    5) **   Üs alma
    6) %    Mod alma

    Karşılaştırma (Comparison) Operatörleri
    1) >    Büyüktür                3 > 2
    2) <    Küçüktür                2 < 3
    3) >=   Büyüktür veya Eşittir   3 >= 3 veya 3 >= 2
    4) <=   Küçüktür veya Eşittir   3 <= 3 veya 3 <= 4
    5) ==   Eşittir                 5 == 5 veya 5 == "5" sadece değeri kontrol eder
    6) !=   Eşit değildir           5 != 6
    7) ===  Eşittir                 5 === 5 değeri ve veri tipini kontrol eder
    8) !==  Eşit değildir           5 !== "5"

    Mantıksal Operatörler
    1) &&   Her iki koşulun da doğru olup olmadığını kontrol eder   5 < 10 && 9 > 6
    2) ||   En az bir koşulun doğru olup olmadığını kontrol eder    5 < 10 || 9 < 6
    3) !    Sonuç true ise false değeri döndürür                    !(5 < 10)
*/

// Operators Exercise
console.log("\nOperatör Örnekleri:\n-------------------");
console.log("2 + 2 = ", 2 + 2);
console.log("1 + 2 + 3 + 4 + 5 = ", 1 + 2 + 3 + 4 + 5);
console.log("1.5 + 2 = ", 1.5 + 2);
console.log("20 - 18 = ", 20 - 18);
console.log("2 * 3 = ", 2 * 3);
console.log("8 / 1 = ", 8 / 1);
console.log("10 / 2.5 = ", 10 / 2.5);
console.log("10 üssü 2 = ", 10 ** 2);
console.log("11 % 10 = ", 11 % 10);
console.log("3 > 2 = ", 3 > 2);
console.log("2 > 3 = ", 2 > 3);
console.log("10 == 10 ifadesinin sonucu = ", 10 == 10);

var firstScore = 100;
var secondScore = "100";
// Equality Operator
console.log("firstScore == secondScore ifadesinin sonucu = ", firstScore == secondScore);

// Strict Equality Operator ===
console.log("firstScore === secondScore ifadesinin sonucu = ", firstScore === secondScore);

var firstNumber = 1;
var secondNumber = "1";
// Inequality Operator
console.log("1 != 1 ifadesinin sonucu = ", firstNumber != firstNumber);

// Strict Inequality Operator
console.log("1 !== '1' ifadesinin sonucu = ", firstNumber !== secondNumber);

var internet = 'inter' + 'net';
console.log(internet);

var notebook = 'note' + 'book';
console.log(notebook);

var year = 365 + ' days';;
console.log(year);
console.log(typeof(year));

var overtime = 1;
overtime += 2;
overtime += 1;
console.log(overtime);

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "..."
console.log(longString);

// right to left
var num = 10;

// left to right
console.log(5 > 4 > 3); // 5 > 4 = true, true > 3 ifadesi 1 > 3 ifadesine karşılık gelir ve sonuç = false olur
console.log(5 < 4 < 3); // 5 < 4 = false, false < 3 ifadesi 0 < 3 ifadesine karşılık gelir ve sonuç = true olur

// Operators Exercises
// 1 - Maç skorunun 8 olan bir yetenek aralığının belirlenmesi
console.log("\nOperators Exercises:\n--------------------");
var matchScore = 8;
// console.log("Mid-level skills: ", 0 < matchScore && matchScore < 10); // Alternatif
console.log("Mid-level skills:", matchScore > 0 && matchScore < 10);

// 2 - Zaman veya enerji değerlerinden herhangi birinin 0'a eşit olması durumunda oyunun bitmesi
var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0);

// 3 - İki sayının çift sayı olup olmamasının kontrolünün yapılması
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// 4 - console.log içerisinde matematiksel işlemlerin yaptırılması
console.log(5 + 10);

// 5 - Sayısal ve String ifadelerinin + operatörüyle birleştirilmesi
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

// 6 - Tanımlanan değişken ile += operatörünün kullanılması
var counter = 0;
counter += 5;
counter += 3;
console.log(counter);