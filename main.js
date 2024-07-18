// Function Declaration
function addTwoNumbers(a, b) {
    return a + b;
}

// Function Expression (Arrow Function)
const add = (a, b) => {
    return a + b;
}

// Demonstration of Function Usage
console.log(addTwoNumbers(3, 5)); // 8
console.log(add(3, 5)); // 8

// Array Iteration with forEach
const ids = [1, 2, 3, 4, 5];
ids.forEach((id) => {
    id++;
    console.log(id); // 2, 3, 4, 5, 6
});

// Rest Operator
function test(first, ...rest) {
    console.log(first); // "Hello"
    console.log(rest);  // ["World", "How", "Are", "You"]
}

test("Hello", "World", "How", "Are", "You");

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// ES6 Features
// 1. let and const
let variableLet = "I can be reassigned";
const variableConst = "I cannot be reassigned";

// 2. Template Literals
const name = "World";
console.log(`Hello, ${name}!`); // Hello, World!

// 3. Destructuring
const person = {
    firstName: "John",
    lastName: "Doe"
};
const { firstName, lastName } = person;
console.log(firstName); // John
console.log(lastName);  // Doe

// 4. Default Parameters
function greet(name = "Stranger") {
    console.log(`Hello, ${name}!`);
}
greet(); // Hello, Stranger!
greet("Alice"); // Hello, Alice!

// ES7 Features
// 1. Exponentiation Operator
console.log(2 ** 3); // 8

// 2. Array.prototype.includes
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

// ES8 Features
// 1. Object.values and Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// 2. String Padding
console.log('hello'.padStart(10)); // '     hello'
console.log('hello'.padEnd(10));   // 'hello     '

/* Additional Common Interview Features */

// Closures
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 1000);
});
myPromise.then((message) => console.log(message)); // "Promise resolved!"

// Async/Await
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
// fetchData(); // Uncomment to execute

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}
const dog = new Dog("Rex");
dog.speak(); // Rex barks

// Map and Set
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap.get('key1')); // value1

const mySet = new Set([1, 2, 3, 4, 5]);
mySet.add(6);
console.log(mySet.has(3)); // true

// Error Handling with Try/Catch
try {
    throw new Error("Something went wrong!");
} catch (error) {
    console.log(error.message); // "Something went wrong!"
}

/* Working with Backend Data Sets */

// Fetching Data from APIs
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
}
// getUsers(); // Uncomment to execute

// CRUD Operations with Fetch
async function createUser(user) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const newUser = await response.json();
    console.log(newUser);
}
// createUser({ name: 'John Doe', email: 'john@example.com' }); // Uncomment to execute

// Updating Data
async function updateUser(id, user) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const updatedUser = await response.json();
    console.log(updatedUser);
}
// updateUser(1, { name: 'Jane Doe', email: 'jane@example.com' }); // Uncomment to execute

// Deleting Data
async function deleteUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    });
    if (response.status === 200) {
        console.log(`User with ID ${id} deleted successfully.`);
    }
}
// deleteUser(1); // Uncomment to execute

/* Array Methods: map, filter, reduce */
const numbersArray = [1, 2, 3, 4, 5];
const doubled = numbersArray.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbersArray.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const sum = numbersArray.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

/* Array Methods: find, findIndex, some, every, sort */
const found = numbersArray.find(n => n > 3);
console.log(found); // 4

const foundIndex = numbersArray.findIndex(n => n > 3);
console.log(foundIndex); // 3

const hasEven = numbersArray.some(n => n % 2 === 0);
console.log(hasEven); // true

const allEven = numbersArray.every(n => n % 2 === 0);
console.log(allEven); // false

const sortedNumbers = [...numbersArray].sort((a, b) => b - a);
console.log(sortedNumbers); // [5, 4, 3, 2, 1]

/* Array Methods: concat, slice, splice */
const concatenatedArray = arr1.concat(arr2);
console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]

const slicedArray = numbersArray.slice(1, 3);
console.log(slicedArray); // [2, 3]

const splicedArray = [...numbersArray];
splicedArray.splice(1, 2, 10, 11);
console.log(splicedArray); // [1, 10, 11, 4, 5]

/* Deep and Shallow Copying */
const originalArray = [1, 2, 3];
const shallowCopy = originalArray;
shallowCopy[0] = 10;
console.log(originalArray); // [10, 2, 3]

const deepCopy = [...originalArray];
deepCopy[0] = 20;
console.log(originalArray); // [10, 2, 3]
console.log(deepCopy); // [20, 2, 3]

console.log("JavaScript features and ES6, ES7, ES8, and additional common interview concepts covered successfully!");
