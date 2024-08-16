/*
Activity 1: If-Else Statements
Task 1
Write a program to check if a number is positive, negative, or zero, and log the result to the console.
Task 2
Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
Activity 2: Nested If-Else Statements
Task 3
Write a program to find the largest of three numbers using nested if-else statements.
Activity 3: Switch Case
Task 4
Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
Task 5
Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
Activity 4: Conditional (Ternary) Operator
Task 6
Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
Activity 5: Combining Conditions
Task 7
Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
Feature Requests
Number Check Script
Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
Voting Eligibility Script
Create a script to check if a person is eligible to vote based on their age and log the result.
Day of the Week Script
Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
Grade Assignment Script
Create a script that uses a switch case to assign a grade based on a score and logs the grade.
Leap Year Check Script
Write a script that checks if a year is a leap year using multiple conditions and logs the result.

*/



// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number=20;
if(number>0){
    console.log('Number is Positive')
}
else if(number<0){
    console.log('Number is negative')
}
else if(number==0){
    console.log('Number is zero')
}
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let PersonAge=18;
if(PersonAge>=18){
    console.log('Person is eligibile for vote')
}
else {
    console.log('Person is not eligible for vote')
}
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a=1;
let b=2;
let c=0;
if(a>b && a>c){
    console.log('a is largest number among three')
}
else if(b>a && b>c){
    console.log('b is the largest number among three')
}
else{
    console.log('c is largest number three')
}

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let DayNumber=1;
switch(DayNumber){
    case 1:
        console.log('Monday ');
        break;
    case 2:
        console.log('Tuesday ');
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('there is noany day related to this number ')
        
}
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85; // Change this value to test different scores

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  case score >= 60:
    console.log("Grade: D");
    break;
  default:
    console.log("Grade: F");
}
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let numberToCheck=7;
let result=(numberToCheck%2==0)? 'Positive':'Negative';
console.log(result);
// Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.
let year = 2024; // Change this value to test different years

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year, "is a leap year.");
} else {
  console.log(year, "is not a leap year.");
}