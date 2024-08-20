Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
Example:

javascript
Copy code
console.log(addNumbers(5, 10)); // 15

function addNumbers(a, b) {
  return a + b;
}
Explanation: The addNumbers function is called before its declaration. This works because function declarations in JavaScript are hoisted, meaning the function can be invoked before it is declared.

2. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.
Example:

javascript
Copy code
try {
  console.log(multiplyNumbers(5, 10)); // Error
} catch (error) {
  console.log(error.message); // multiplyNumbers is not a function
}

const multiplyNumbers = function(a, b) {
  return a * b;
};

console.log(multiplyNumbers(5, 10)); // 50
Explanation: Function expressions are not hoisted like function declarations. When you try to call multiplyNumbers before it is defined, it results in an error.

3. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.
Example:

javascript
Copy code
function sumNumbers(a, b) {
  console.log(sum); // undefined
  var sum = a + b;
  return sum;
}

console.log(sumNumbers(5, 10)); // 15
Explanation: The sum variable is hoisted to the top of the function scope and initialized as undefined. This is why console.log(sum) logs undefined before the variable is assigned a value.

4. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.
Example:

javascript
Copy code
{
  try {
    console.log(varVariable); // undefined
    console.log(letVariable); // Error: Cannot access 'letVariable' before initialization
    console.log(constVariable); // Error: Cannot access 'constVariable' before initialization
  } catch (error) {
    console.log(error.message);
  }

  var varVariable = "I am var";
  let letVariable = "I am let";
  const constVariable = "I am const";

  console.log(varVariable); // "I am var"
  console.log(letVariable); // "I am let"
  console.log(constVariable); // "I am const"
}
Explanation:

varVariable is hoisted and initialized as undefined, so it can be logged before its declaration.
letVariable and constVariable are hoisted but remain in the Temporal Dead Zone (TDZ) until their initialization, so trying to access them before they are assigned a value results in an error.
5. Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the Temporal Dead Zone (TDZ).
Example:

javascript
Copy code
{
  try {
    console.log(letVariable); // Error: Cannot access 'letVariable' before initialization
  } catch (error) {
    console.log(error.message); // Temporal Dead Zone
  }

  let letVariable = "Hello";
  console.log(letVariable); // "Hello"
}
Explanation: letVariable is in the TDZ before it is initialized. Attempting to access it before the declaration results in a ReferenceError. This demonstrates how variables declared with let (and const) are not available before they are initialized within their block scope.






