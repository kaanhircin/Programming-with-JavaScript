/********************** 
    Bugs and Errors
    1) Syntax Error
    2) Type Error
    3) Reference Error 
**********************/

// *** Bugs ***
/*
    function addNums(a, b) {
    console.log(a + b);
    }

    addNums("1", 2); // addNums(1, 2); olmalı aksi taktirde 'a + b' işlemi 'ab' olarak sonuç verir
    console.log("Still Running");
*/

// *** Syntax Error ***
// var greeting = "Hello; // String ifade "Hello" yada 'Hello' şeklinde belirtilmeli

// *** Type Error ***
// (5).pop(); // TypeError: 5.pop is not a function

// *** Reference Error ***
/* 
    console.log(c + d); // ReferenceError: c is not defined
    console.log("This line never runs");
*/



// Error Handling

// Try catch
try {
    console.log(c + d);
} catch (err) {
    console.log(err);
}
console.log("\nThis line now runs");

try {
    throw new Error(); // throw try bloğunun içerisinde olmalıdır aksi taktirde catch throw'u yakalayamaz
} catch (err) {
    console.log("\n", err);
}
console.log("\nYou are on this line");

/*
    throw new Error();
    try {
        console.log("Throw try bloğunun dışındadır");
    } catch (err) {
        console.log(err);
    }
*/

// Example
try {
    console.log("\nHello");
    throw new ReferenceError();
} catch (err) {
    console.log(err);
    console.log("\nThere was a reference error");
    console.log("The reference error was saved in the error log");
}
console.log("\nMy program does not stop");



/**************************
    The most common errors:
    1) ReferenceError 
    2) SyntaxError 
    3) TypeError 
    4) RangeError

    Some other errors:
    1) AggregateError 
    2) Error 
    3) InternalError 
    4) URIError
**************************/

// console.log(username); // Reference Error - username is not defined
// var a "there's no assignment operator here"; // Syntax Error - Unexpected string
// "Hello".pop(); // Type Error - "Hello".pop is not a function
/*
    var a = (10).toString(2);
    console.log(a); // 1010

    var b = (10).toString(8);
    console.log(b); // 12

    var c = (10).toString(100); // Range Error - toString() radix argument must be between 2 and 36
    console.log(c); 
*/



/*************************
    'Null' Data type
    'Undefined' Data type
    'Empty' Strings
*************************/

// *** Null
var letters = 'abc';
console.log(letters.match(/a/));
console.log(letters.match(/d/)); // Null

// *** Undefined - Tüm fonksiyonlar başka bir değer return edilmediği sürece default olarak undefined döndürür
console.log(typeof(console.log())); // Undefined
var noise; // Undefined
console.log(noise);

var game = {

    score: 100
};
console.log(game.Score); // Undefined ---> game.score olmalıydı

// *** Empty Strings
var name1 = "";
var name2 = '';
console.log("Birinci İsim:" + name1 + "İkinci isim:" + name2 + "\n");


// Example
function addTwoNumbs(a, b) {
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError("The first argument is not a number");
        } else if (typeof(b) != 'number') {
            throw new ReferenceError("The second argument is not a number");
        } else {
            console.log(a, "+", b, "=", a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

addTwoNumbs(5, "5");
console.log("It still works");


// Example - Defensive Programming
function letterFinder(word, match) {
    var condition1 = word.length >= 2 && typeof(word) == 'string';
    var condition2 = match.length == 1 && typeof(match) == 'string';

    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('\nFound the', match, 'at', i);
            } else {
                console.log('\n---No match found at', i);
            }
        }
    } else {
        console.log("\nPlease pass correct arguments to the function");
    }
}

/*
function letterFinder(word, match) {
    if (word.length < 2 && typeof(word) != 'string') {
        if (match.length != 1 && typeof(match) != 'string') {
            console.log("\nPlease pass correct arguments to the function");
        }
    } else {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('\nFound the', match, 'at', i);
            } else {
                console.log('\n---No match found at', i);
            }
        }
    }
}
*/

letterFinder([], []);
letterFinder("cat", "c");

// Quiz
console.log("\n--------------------");
var result = null;
console.log(result); // Sonuç ne çıkar ?

console.log(Number(5).toPrecision(300)); // RangeError: toPrecision() argument must be between 1 and 100

// Syntax Error try catch ile program çalıştırılamayacağı için yakalanamazlar
// Try catch ile Logical & Runtime Errors yakalanabilir
/*
try {
    console.log('hello)
}
catch (e) {
        console.log('caught')
}
*/