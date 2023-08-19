let balance = parseInt(readLine(), 10);
let withdraw = parseInt(readLine(), 10);

/* parseInt() - Method that parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
A radix parameter specifies the number system to use:
    2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.

    If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.
*/

balance -= withdraw;
console.log(balance);