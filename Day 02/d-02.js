/*
Activity 1: Arithmetic Operations
Task 1: Write a program to add two numbers and log the result to the console.
*/

let a = 10;
let b = 20;
let sum = a + b;
console.log('The sum of a and b is : ', sum); // Output: The sum of a and b is : 30

// Task 2: Write a program to subtract two numbers and log the result to the console.
a = 10;
b = 20;
let subtract = a - b; // Fixed the operation to subtraction
console.log('The subtraction of a and b is : ', subtract); // Output: The subtraction of a and b is : -10

// Task 3: Write a program to multiply two numbers and log the result to the console.
a = 10;
b = 20;
let multiply = a * b; // Fixed the operation to multiplication
console.log('The multiplication of a and b is : ', multiply); // Output: The multiplication of a and b is : 200

// Task 4: Write a program to divide two numbers and log the result to the console.
a = 10;
b = 20;
let divide = a / b; // Fixed the operation to division
console.log('The division of a and b is : ', divide); // Output: The division of a and b is : 0.5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let num1 = 20;
let num2 = 3;
let remainder = num1 % num2; // Fixed the variable name from 'reminder' to 'remainder'
console.log('The remainder is : ', remainder); // Output: The remainder is : 2

/*
Activity 02: Assignment Operators
Task 6: Use the += operator to add a number to a variable and log the result to the console.
*/

let number1 = 23;
number1 += 4;
console.log(number1); // Output: 27

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
number1 -= 3;
console.log(number1); // Output: 24

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let x = 2;
let y = 3;
console.log('Less is :', x < y); // Output: Less is : true
console.log('Greater is :', y > x); // Output: Greater is : true

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let s = 2;
let t = 3;
console.log('Less than or Equals to  :', s <= t); // Output: Less than or Equals to  : true
console.log('Greater than or Equals to :', t >= s); // Output: Greater than or Equals to : true

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let j = 10;
let v = 20;
console.log(j == v); // Output: false
console.log(j === v); // Output: false

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let k = false;
let l = true;
console.log(k && l); // Output: false

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let q = 10;
let g = 10;
console.log(q || g); // Output: 10 (since q is 10, which is truthy)

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let c = 33;
let d = 4;
console.log(c != d); // Output: true

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let e = 4;
let h = e > 0 ? 'positive' : 'negative';
console.log('Ternary operator: ', h); // Output: Ternary operator:  positive

/*
Feature Requests

1. Arithmetic Operations Script
*/

// Define two numbers
let num3 = 15;
let num4 = 7;

// Addition
let addition = num3 + num4;
console.log('Addition: ', addition); // Output: Addition: 22

// Subtraction
let subtraction = num3 - num4;
console.log('Subtraction: ', subtraction); // Output: Subtraction: 8

// Multiplication
let multiplication = num3 * num4;
console.log('Multiplication: ', multiplication); // Output: Multiplication: 105

// Division
let division = num3 / num4;
console.log('Division: ', division); // Output: Division: 2.142857142857143

// Remainder
let remainder2 = num3 % num4;
console.log('Remainder: ', remainder2); // Output: Remainder: 1

/*
2. Comparison and Logical Operators Script
*/

// Define two numbers
let a1 = 5;
let b1 = 8;

// Comparison operators
console.log('a < b:', a1 < b1); // Output: a < b: true
console.log('a > b:', a1 > b1); // Output: a > b: false
console.log('a <= b:', a1 <= b1); // Output: a <= b: true
console.log('a >= b:', a1 >= b1); // Output: a >= b: false
console.log('a == b:', a1 == b1); // Output: a == b: false
console.log('a === b:', a1 === b1); // Output: a === b: false

// Logical operators
let x1 = true;
let y1 = false;
console.log('x && y:', x1 && y1); // Output: x && y: false
console.log('x || y:', x1 || y1); // Output: x || y: true
console.log('!x:', !x1); // Output: !x: false
console.log('!y:', !y1); // Output: !y: true

/*
3. Ternary Operator Script
*/

// Define a number
let number2 = -3;

// Ternary operator to check if the number is positive or negative
let result = number2 > 0 ? 'positive' : 'negative';
console.log('Number is:', result); // Output: Number is: negative
