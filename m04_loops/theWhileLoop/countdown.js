/* TASK:
    Create a timer program that will take the number of seconds as input, output the remaining time, and countdown to 0.
    You need to output every number, including 0.

    Sample Input
    5

    Sample Input
    5
    4
    3
    2
    1
    0

    ***************************************************
    ORIGINAL

    let num = parseInt(readLine(), 10);

    //your code goes here
    ***************************************************

*/

let num = parseInt(readLine(), 10);

//your code goes here

while (num >= 0)  {
    console.log(num);

    num--;
}

