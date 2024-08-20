. How do you handle type conversion in JavaScript using a function called convertToNumber?
You can write a function convertToNumber that takes a string as an argument and attempts to convert it to a number. If the conversion is successful, it returns the number; otherwise, it returns the string "Invalid number" using error handling.

Example:

javascript
Copy code
function convertToNumber(str) {
  try {
    let number = Number(str);
    if (isNaN(number)) {
      throw new Error("Invalid number");
    }
    return number;
  } catch (error) {
    return "Invalid number";
  }
}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // "Invalid number"
Explanation: The function uses Number() to convert the string to a number. If the conversion fails, isNaN() checks if the result is NaN, and if so, an error is thrown and caught, returning "Invalid number".

2. How do you build a robust function in JavaScript to handle errors using getPerson?
You can create a function getPerson that takes an object as a parameter and returns the person's name and age in a formatted string. If the object does not have valid properties "name" and "age", it throws an error, which is handled using try-catch.

Example:

javascript
Copy code
function getPerson(person) {
  try {
    if (typeof person !== 'object' || !person.name || !person.age) {
      throw new Error("Invalid parameter type");
    }
    return `Name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return error.message;
  }
}

console.log(getPerson({ name: "John", age: 30 })); // "Name: John, Age: 30"
console.log(getPerson("invalid")); // "Invalid parameter type"
Explanation: The function checks if the input is an object and has the required properties. If not, it throws an error, which is caught and returned as a message.

3. How do you create a class called Car with properties and methods in JavaScript?
You can create a class Car with properties company, model, and year, and a method getDescription that returns a formatted string describing the car.

Example:

javascript
Copy code
class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }
  
  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar.getDescription()); // "This is a 2020 Toyota Camry"
Explanation: The class Car has a constructor to initialize its properties and a method getDescription to return a string describing the car.

4. How do you create a class Employee with properties and methods in JavaScript?
You can create a class Employee with properties name, position, and salary, and a method getSalary that returns the employee's salary.

Example:

javascript
Copy code
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  
  getSalary() {
    return this.salary;
  }
}

const employee = new Employee("Alice", "Manager", 50000);
console.log(employee.getSalary()); // 50000
Explanation: The class Employee includes a method getSalary that returns the salary of the employee.

5. How do you implement a Person class with default values in JavaScript?
You can create a class Person with properties name and age, and a method getDetails that returns a formatted string. The constructor uses default parameters to assign "Unknown" to name and 0 to age if no values are provided.

Example:

javascript
Copy code
class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
  
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("Bob", 25);
const person2 = new Person();

console.log(person1.getDetails()); // "Name: Bob, Age: 25"
console.log(person2.getDetails()); // "Name: Unknown, Age: 0"
Explanation: The constructor uses default values if no arguments are provided, ensuring the object always has valid values.

6. How do you use a static method to add two numbers with a Calculator class in JavaScript?
You can create a class Calculator with a static method add that takes two numbers as arguments and returns their sum. The static method can be called directly on the class without needing to instantiate it.

Example:

javascript
Copy code
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 10)); // 15
Explanation: The add method is static, so it can be called directly on the Calculator class without creating an instance.

7. How do you create a password checker using a class User in JavaScript?
You can create a class User with properties username and password, and implement getter and setter methods for password. The setter ensures the password is valid (at least 8 characters, contains a number and an uppercase letter), while the getter returns the password masked with asterisks.

Example:

javascript
Copy code
class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }
  
  get password() {
    return '*'.repeat(this._password.length);
  }
  
  set password(newPassword) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (passwordRegex.test(newPassword)) {
      this._password = newPassword;
    } else {
      console.error("Password must be at least 8 characters long, contain at least one number and one uppercase letter.");
    }
  }
}

const user = new User("JohnDoe", "Password123");
console.log(user.password); // ***********

user.password = "newPass123"; // Valid password
console.log(user.password); // **********

user.password = "short"; // Invalid password
// Output: Password must be at least 8 characters long, contain at least one number and one uppercase letter.
Explanation: The set password method validates the new password and only updates it if it meets the criteria. The get password method masks the password with asterisks.

8. How do you add a method to a prototype in JavaScript?
You can create a prototype object called Student with a property name and add a method printDetails that logs a message to the console.

Example:

javascript
Copy code
function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const student = new Student("Mithun");
student.printDetails(); // "Hello, my name is Mithun"
Explanation: The printDetails method is added to the Student prototype, allowing all instances of Student to access and use it.

9. How do you check the presence of a number in an array using closures in JavaScript?
You can create a function numberChecker that takes an array of numbers as an argument and returns a function that checks if a given number is in the array.

Example:

javascript
Copy code
function numberChecker(numbers) {
  return function(number) {
    return numbers.includes(number);
  };
}

const checkNumber = numberChecker([1, 2, 3, 4, 5]);

console.log(checkNumber(3)); // true
console.log(checkNumber(7)); // false
Explanation: The numberChecker function returns a closure that retains access to the numbers array and checks if a given number is present in it.

10. How do you filter products by category using closures in JavaScript?
You can write a function that takes an array of products and returns a function that filters the array by a given product category. The closure filters products using the filter() method and returns a new array containing only the products with the specified category.

Example:

javascript
Copy code
function filterByCategory(products) {
  return function(category) {
    return products.filter(product => product.category === category);
  };
}

const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt







