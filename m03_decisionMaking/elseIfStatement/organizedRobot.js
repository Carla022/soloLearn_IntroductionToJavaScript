/* TASK:
    Develop a program that will be used in a robot that categorizes items by their color.
    Each color corresponds to a box with a specific number.
    
    For simplicity, our program will handle 3 colors:

    red goes to box #1
    green goes to box #2
    black goes to box #3
    Your program needs to take color as input and output the corresponding box number.

    In the case of not supported colors, the program should output "unknown".

    Sample Input
    green

    Sample Output
    2

    ***************************************************
    ORIGINAL

    let color = readLine();

    red => 1
    green => 2
    black => 3
    other cases => unknown

    //your code goes here
    ***************************************************

*/

let color = readLine();

/*
    red => 1
    green => 2
    black => 3
    other cases => unknown
*/

//your code goes here

if(color == 'red'){
    console.log(1)
} else if(color == 'green'){
    console.log(2); 
}else if ( color == 'black'){
    console.log(3);
}else {
    console.log('unknown')
}