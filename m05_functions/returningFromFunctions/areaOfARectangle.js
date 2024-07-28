/* TASK:
    calculate the area of a given rectangle.
    The given program takes the <b>width</b> and <b>length</b> as input.

    Complete the <b>area</b> function, which takes the length and width as arguments, to calculate and return the area.
    Then call the function for the given inputs.

    Input Example
    7
    4

    Output Example
    28

    ***************************************************
    ORIGINAL

    let width = parseInt(readLine(),10);
    let length = parseInt(readLine(),10);

    //Complete the function
    function area(x,y){
        
    }

    //call the function

    ***************************************************

*/

let width = parseInt(readLine(),10);
let length = parseInt(readLine(),10);

//Complete the function
function area(x,y){
    return x*y;
    
}

//call the function
let result = area(width,length);
console.log(result);
