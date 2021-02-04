///////////////////////////
///// Unit 0 Practice /////
///////////////////////////


/* 1.
Write a greeter function that will display 
'Hello World' to the console.
*/

//Inputs: none
//Outputs: string

function greeter(){

  console.log('hello world');
}



/* 2.
Write a function that will calculate the sum of two 
numbers.

Example:
divide(3, 9) => 12
divide(9, 9) => 18

*/

//Inputs: two numbers
//Outputs: one number being the sum of thetwo Inputs

function sum(num1, num2){
  //return the sum of the two params
  return num1 + num2
}

console.log(sum(10,1), 'sum function')

/* 3.
Write a function that will calculate the difference
of two numbers.

Example:
divide(3, 9) => -6
divide(9, 9) => 0

*/

//Inputs: 2 numbers
//Outputs: 1 numbers

var difference = function(num1, num2){
  return num1 - num2
}

console.log(difference(1,10), 'subtraction function')



/* 4.
Write a function that will calculate the quotient
of two numbers.

Example:
divide(3, 9) => 0.3333333
divide(9, 9) => 1

*/

//Inputs: 2 numbers
//outputs: 1 number

var division = (num1, num2) => {
  return num1 / num2
}

console.log(division(10, 5), 'division function')




/* 5.
Write a function that will calculate the product
of two numbers.

Example:
multiply(3, 9) => 27
multiply(9, 9) => 81

*/

//Inputs: two numbers 
//Outputs: one number

function multiply(num1, num2){
  return num1 * num2;
}

console.log(multiply(50, 50), 'multiply function')



/* 6.
Write a function that will return years into days.

Example:
yearsToDays(3) => 1095
yearsToDays(9) => 3285

*/

//Inputs: a number representing the years
//Outputs: a number for how many days in a years

function yearsToDays(year){
  return 365 * year
}

console.log(yearsToDays(54), 'years function')

/* 7.
Write a function that will return the first element
in a given array.


Example:
firstElement([0,1,2,3]) => 0
yearsToDays(['hello', 'world']) => 'hello'

*/

//inputs: an array
//outputs: first element

function firstElement(array){
  return array[0]
}

console.log(firstElemenet([true, false, 'window', 10]))



/* 7.
Write a function that will return the first element
in a given array.


Example:
firstElement([0,1,2,3]) => 0
yearsToDays(['hello', 'world']) => 'hello'

*/






/* 8.
Write a function that will convert minutes into 
seconds. 


Example:
minToSec(60) => 3600
minToSec(1) => 60

*/

//Inputs: number of minutes
//Outputs: number of seconds

function minToSec(minutes){
  return minutes * 60;
}

console.log(minToSec(50))



/* 9.
Write a function that will convert seconds into 
hours. 


Example:
secToHours(3600) => 1
secToHours(1800) => 0.5

*/

//Inputs: number
//Outputs: numbers

function secToHours(seconds){
  return seconds / 3600
}

console.log(secToHours(3600), 'hours')




/* 10.
Write a function that will return the remainder of 
the division of two numbers. 


Example:
remainder(5, 2) => 1
remainder(10, 7) => 0.5

*/

//inputs: two numbers
//outputs: two numbers

function remainder(num1, num2){
  return num1 % num2
}

console.log(remainder[5,2])