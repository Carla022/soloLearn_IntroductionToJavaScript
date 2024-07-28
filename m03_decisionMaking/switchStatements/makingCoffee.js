/* TASK:
    A coffee vending machine makes 3 types of coffee:

        1 - Americano

        2 - Espresso

        3 - Cappuccino

    The given program takes the number from the customer as input.
    Complete the program to serve the corresponding coffee type. It should output "Unknown", if there is no match.

    Sample Input
    2

    Sample Output
    Espresso

    ***************************************************
    ORIGINAL

    let choice = parseInt(readLine(), 10);

    1 => Americano
    2 => Espresso
    3 => Cappuccino

    //your code goes here
    ***************************************************

*/

let choice = parseInt(readLine(), 10);
/*
1 => Americano
2 => Espresso
3 => Cappuccino
*/

//your code goes here

switch(choice){
    case 1:
        console.log("Americano");
        break;
    case 2:
        console.log("Espresso");
        break;
    case 3:
        console.log("Cappuccino")
        break;
        default:
            console.log("Unknown")

}
