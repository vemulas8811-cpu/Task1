// Task 1
// Create a variable using var to store your age. Print it. Then change the value and print again.
var age = 22;
console.log(age);
age = 23;
console.log(age);

// Task 2
// Create a variable using let to store your name. Print it. Then change the value and print again.
let name = "suresh";
console.log(name);
name = "venkata";
console.log(name);

// Task 3
// Create a variable using const to store your birth year. Print it. Try to change the value and see what happens.
const birth_year = 2002;
console.log(birth_year);

// Task 4
// Create a var variable with value 10. Print it. Re-declare the same variable with value 20. Print it again.
var a = 10;
console.log(a);
var a = 20;
console.log(a);

// Task 5
// Create a let variable with value "Hello". Try to re-declare the same variable again. See what error you get.
let b = "Hello";
console.log(b);

// Task 6
// Print your name, age, city, 100 and "JavaScript is fun" using console.log().
console.log("my name is suresh");
console.log("i am 23 years old");
console.log("my city is hyderabad");
console.log(100);
console.log("javascript is fun");

// Task 7
// Show "Welcome to JavaScript" using alert().
alert("welcome to javascript");

// Task 8
// Ask "Do you like coding?" using confirm() and print the result.
let c = confirm("Do you like coding?");
console.log(c);

// Task 9
// Ask "What is your name?" using prompt() and print the result.
let d = prompt("What is your name?");
console.log(d);

// Task 10
// Print a warning message using console.warn().
console.warn("This is a warning message");

// Task 11
// Print an error message using console.error().
console.error("This is an error message");

// Task 12
// Print something and then clear the console.
console.clear();

// Task 13
// Write your name on webpage using document.writeln().
document.writeln("variable practise");

// Task 14
// Ask user name using prompt(), show it using alert() and print using console.log().
let e = prompt("enter your name:");
alert("welcome " + e + " to javascript programming");
console.log(e);

// Task 15
// Ask user age using prompt(), show using alert() and document.writeln().
var age = prompt("enter your age:");
alert("your age is " + age);
document.writeln("your age is " + age);

// Task 16
// Ask "Have you had breakfast?" using confirm() and print result.
const f = confirm("have you had your breakfast?");
console.log(f);

// Task 17
// Create variables city, country and planet and print them.
var city = "Mumbai";
let country = "India";
const planet = "Earth";
console.log(city);
console.log(country);
console.log(planet);

// Task 18
// Create a let variable and change its value multiple times.
let g = 5;
console.log(g);
g = 10;
console.log(g);
g = 15;
console.log(g);

// Task 19
// Print normal message, warning and error using console methods.
console.log("this is normal message");
console.warn("this is a warning message");
console.error("this is an error message");

// Task 20
// Ask name, age and student status and print all values.
const name1 = prompt("enter your name:");
let age1 = prompt("enter your age:");
var question = confirm("are you a student?");
console.log("name: " + name1);
console.log("age: " + age1);
console.log("student: " + question);
alert("Welcome: " + name1);

// Task 21
// Clear console, show hello, ask name and welcome user.
console.clear();
alert("Hello!");
const name3 = prompt("What is your name?");
alert("Welcome, " + name3 + "!");
document.writeln(name3);

// Task 22
// Create variables inside block and try to access outside.
{
  var a = 100;
  let b = 200;
  const c = 300;
}
console.log(a);

// Task 23
// Create variables using var, let, const with values 10, 20, 30 and print them.
var one = 10;
let two = 20;
const three = 30;
console.log(one);
console.log(two);
console.log(three);

// Task 24
// Ask user using confirm and print result using log, warn and error.
let x = confirm("Do you like JavaScript?");
console.log(x);
console.warn(x);
console.error(x);

// Task 25
// Ask user name and display on webpage and console.
const name2 = prompt("What is your name?");
document.writeln("Your name is: " + name2);
console.log("Your name is: " + name2);

// Task 26
// Ask user age and display using alert, console and webpage.
let age2 = prompt("What is your age?");
alert("Your age is: " + age2);
console.log("Your age is: " + age2);
document.writeln("Your age is: " + age2);

// Task 27
// Compare var and let inside block scope.
{
  var a = 100;
  let b = 200;
}
console.log(a);

// Task 28
// Ask "Are you 18+?" and print Adult or Minor.
let result = confirm("Are you 18+?");
if (result) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Task 29
// Re-initialize variables and print final values.
var fruit = "Apple";
fruit = "Banana";
let vehicle = "Car";
vehicle = "Bike";
console.log(fruit);
console.log(vehicle);

// Task 30
// Perform complete practice with alert, prompt, confirm and console.
console.clear();
alert("Practice Start");
const name4 = prompt("Enter your name:");
let age3 = prompt("Enter your age:");
var question2 = confirm("Are you happy?");
console.log("Name: " + name4);
console.log("Age: " + age3);
console.log("Happy: " + question2);
alert("practice End");
document.writeln("Thank You!");
