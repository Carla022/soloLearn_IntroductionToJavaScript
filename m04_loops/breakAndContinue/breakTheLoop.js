/* TASK:
    The given code declares a loop and calculates the multiplication of all numbers from 1 to 10000.
    Make the necessary changes to break the loop when the result is larger than 10000 and output the result.

    ***************************************************
    ORIGINAL

    let num = 1;

    for(i = 1; i<=100; i++){
        num*=i;
        //your code goes here
        
    }

    //generate the result

    ***************************************************

*/


let num = 1;

for(i = 1; i<=100; i++){
    num*=i;
    //your code goes here
    if(num > 10000){
        break;
    }
    
}

//generate the result
console.log(num)
