/* TASK:
    Make a function that converts a foot value to inches.
    1 foot has 12 inches.

    The given code takes the foot value as input and passes it to the <b>convert</b> function.
    Complete the code by defining a <b>convert()</b> function that takes the foot value as an argument and outputs the inches value.

    Input Example
    8

    Output Example
    96

    ***************************************************
    ORIGINAL

    let foot = parseInt(readLine(), 10);

    Define the convert() function 

    convert(foot);
    ***************************************************

*/


let foot = parseInt(readLine(), 10);

/* Define the convert() function */

function convert(foot) {
    console.log(foot *12);
    
}


convert(foot);