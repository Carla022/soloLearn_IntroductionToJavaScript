/* TASK:
    Given a clock that measures 24 hours a day, and a program that takes the hour as input.
    Complete the program to output <b>am</b> to the console if the hour is in the range of 0 to 11 (inclusive), and output <b>pm</b> if it's not.

    Sample Input
    13

    Sample Output
    pm

    ***************************************************
    ORIGINAL

    let hour = parseInt(readLine(), 10);

    //your code goes here
    ***************************************************

*/

let hour = parseInt(readLine(), 10);
//your code goes here
let isAm = (hour <= 11) ? "am" : "pm";
console.log(isAm);
