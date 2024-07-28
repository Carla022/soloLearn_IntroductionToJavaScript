/* TASK:
    Redesign the given function so that it will take the given input as the name of the user and output the welcome message with it.

    Sample Input
    Tommy

    Sample Output
    Welcome, Tommy

    ***************************************************
    ORIGINAL

    function welcome(){
        let name = readLine();
        //redesign function
        console.log('Welcome, user');
    }

    //call the function


    ***************************************************

*/


function welcome(){
    let name = readLine();
        //redesign function
        console.log(`Welcome, ${name}`);
    }

//call the function
welcome();

