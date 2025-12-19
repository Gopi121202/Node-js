<!DOCTYPE html>
<html>
<head>
    <title>programiz</title>
</head>
<body>

<script>


// <
// <!-- // hello world 
// console.log('Hello World');

// // add 2 numbers
// let num1 = 5;
// let num2 = 3;

// let sum = num1 + num2;

// console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// // swap 2 numbers

// let a = prompt('Enter the first variable: ');
// let b = prompt('Enter the second variable: ');

// //create a temporary variable
// let temp;

// //swap variables
// temp = a;
// a = b;
// b = temp;
// console.log('After swapping, the first variable is: ' + a);
// console.log('After swapping, the second variable is: ' + b); -->
// <!-- 
// // to check the number is positive negative or zero
// let num = parseFloat(prompt("Enter a number:"));

// if (num > 0) {
//     console.log("The number is positive");
// } else if (num < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }


// // number is even or odd 
// let num = prompt("Enter a number");

// num = Number(num); 

// if (num % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }
 
// // the largest of 3 numbers
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let c = Number(prompt("Enter third number"));

if (a > b && a > c) {
console.log(a + " is the largest");
} 
else if (b > a && b > c) {
 console.log(b + " is the largest");
 } 
 else {
 console.log(c + " is the largest");
 } 


muliplication table of number
 let num = Number(prompt("Enter a number:"));
 for (let i = 1; i <= 10; i++) {
 console.log(num + " x " + i + " = " + (num * i));
 }

// // Sum of Natural Numbers

let n = Number(prompt("Enter a number:"));
 let sum = 0;
 for (let i = 1; i <= n; i++) {
  sum = sum + i; }

 console.log("The sum of natural numbers up to " + n + " is: " + sum);


// // check palindrome
let str = "madam";   
let reversed = "";

for (let i = 0; i < str.length; i++) {

for (let j = str.length - 1 - i; j === str.length - 1 - i; j--) {
reversed += str[j];
}

}
if (str === reversed) {
  console.log(str + " is a palindrome");
// } else {
//   console.log(str + " is not a palindrome");
// }

// //reverse a string
// let str = "hello";   
// let reversed = "";

// for (let i = 0; i < str.length; i++) {

//   for (let j = str.length - 1 - i; j === str.length - 1 - i; j--) {
//     reversed += str[j];
//   }

// }

// console.log("Reversed string:", reversed);


// // count occurrences of a character in string
// let str = "javascript";  
// let ch = "a";             
// let count = 0;

// for (let i = 0; i < str.length; i++) {

//   for (let j = i; j === i; j++) {
//     if (str[j] === ch) {
//       count++;
  }  }

 }
console.log("The character '" + ch + "' occurs " + count + " times.");

 //JavaScript Program to Convert the First Letter of a String into UpperCase
let str = "javascript";  
let result = "";

for (let i = 0; i < str.length; i++) {
for (let j = i; j === i; j++) {

 if (i === 0) {
 result += str[j].toUpperCase();
 } else {
 result += str[j];
 }

 }
 } }

console.log("Result:", result);

//JavaScript Program to Count the Number of Vowels in a String

let str = "javascript";      
let vowels = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < str.length; i++) {

  for (let j = i; j === i; j++) {

    if (vowels.includes(str[j])) {
      count++;
    }
  }
}
console.log("Number of vowels:", count);











</script>

</body>
</html>