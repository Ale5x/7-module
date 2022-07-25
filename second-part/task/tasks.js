'use strict';
// secondsToDate(31536000);
// toBase2Converter(10);
// substringOccurrencesCounter("text", "text");
repeatingLitters("Hello world")

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    console.log("Task -> secondsToDate");
    let startDate = Date.parse('2020-06-01T00:00:00.2020');
    let getDateFromSecond = new Date(startDate + seconds * 1000);
    console.log("date", getDateFromSecond);

    return getDateFromSecond;
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    console.log("Task -> toBase2Converter");
    let num = decimal;
    let binary = (num % 2).toString();
    for (; num > 1;) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
    console.log("number", decimal);
    console.log("binary code", binary)
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    console.log("Task -> substringOccurrencesCounter");
    let map = new Map();
    let arraySubstring = substring.split("");
    for (let i = 0; i < arraySubstring.length; i++) {
        if (!(map.has(arraySubstring[i]))) {
            map.set(arraySubstring[i], 0);
        }
    }
    console.log("substring", substring);
    console.log("text", text);


    for (let i = 0; i < text.length; i++) {
        let count = map.get(text[i]);
        count++;
        map.set(text[i], count);
    }
    console.log("arraySubstring", map)
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    let newString = '';
    let map = new Map();
    map.set('o', 1);
    map.set('l', 1);
    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i])) {
            if (map.get(string[i]) < 2){
                newString += string[i] + string[i];
                let count = map.get(string[i]);
                count++;
                map.set(string[i], count);
            } else {
                // newString += string[i];
            }
        } else {
            newString += string[i] + string[i];
        }

    }
    console.log('string', newString);

}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {

}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {

}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {

}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {

}