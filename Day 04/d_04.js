// Activity 01: For Loops

// Task 1
// Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) { // Changed starting value to 1 for correct range
    console.log(i);
}

// Task 2
// Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i * 5}`); // Corrected the string concatenation and multiplication
}

// Activity 02: While Loop

// Task 3
// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) { // Changed from for loop to while loop
    sum += i;
    i++;
}
console.log('The sum from 1 to 10 is:', sum);

// Task 4
// Write a program to print numbers from 10 to 1 using a while loop.
let a = 10;
while (a >= 1) { // Changed condition to >= 1 to include 1 in output
    console.log(a);
    a--;
}

// Activity 03: Do While Loop

// Task 5
// Write a program to print numbers from 1 to 5 using a do...while loop.
let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5);

// Task 6
// Write a program to calculate the factorial of a number using a do...while loop.
let no = 5;
let factorial = 1;
let j = 1;
do {
    factorial *= j; // Changed to *= for correct factorial calculation
    j++;
} while (j <= no);
console.log(`Factorial of ${no} is ${factorial}`);

// Activity 04: Nested Loops

// Task 7
// Write a program to print a pattern using nested for loops:
for (let row = 1; row <= 5; row++) { // Changed starting value to 1 and end condition to <= 5 for correct pattern
    let pattern = "";
    for (let column = 1; column <= row; column++) { // Corrected variable name and condition
        pattern += '* ';
    }
    console.log(pattern.trim()); // Used trim() to remove trailing space
}

// Activity 05: Loop Control Statements

// Task 8
// Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let k = 1; k <= 10; k++) {
    if (k === 5) {
        continue;
    }
    console.log(k);
}

// Task 9
// Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let l = 1; l <= 10; l++) {
    if (l === 7) {
        break;
    }
    console.log(l); // Changed variable to l to match the loop variable
}

// Feature Request 1: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

// Using for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Using while loop
let numWhile = 1;
while (numWhile <= 10) {
    console.log(numWhile);
    numWhile++;
}

// Feature Request 2: Create a script that prints the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Feature Request 3: Write a script that prints a pattern of stars using nested loops.
let totalRows = 5;
for (let i = totalRows; i >= 1; i--) { // Corrected loop to decrement and print the pattern
    let starPattern = "";
    for (let j = 1; j <= i; j++) {
        starPattern += "* ";
    }
    console.log(starPattern.trim()); // Used trim() to remove trailing space
}

/*
    * * * * * 
    * * * * 
    * * * 
    * * 
    * 
*/

// Feature Request 4: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
let totalSum = 0;
let numberToSum = 1;
while (numberToSum <= 10) {
    totalSum += numberToSum;
    numberToSum++;
}
console.log("Sum of numbers from 1 to 10 is:", totalSum);

// Feature Request 5: Create a script that calculates the factorial of a number using a do...while loop.
let factorialNumber = 5; // Change this value to test different numbers
let totalFactorial = 1;
let k = 1;
do {
    totalFactorial *= k;
    k++;
} while (k <= factorialNumber);
console.log(`Factorial of ${factorialNumber} is ${totalFactorial}`);
