console.log('Hello World');
console.error('This is an error');
console.warn('This a warning');

//let, const
const age = 30;
let years = 31;


console.log(age);
console.log(years);

// string, numbers, boolean, null, undefined

const name = 'Space';
const age2 = 20;
const rating = 4.5;
const isCool = true;
const x = null; // an empty variable
const y = undefined;
let z; // undefined

console.log(typeof y);

// Concatenation
console.log('My name is ' + name + 'and I am ' + age2);
// Template string
const hello = `My name is ${name} and I am ${age2}`;
console.log(hello);

const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const w = 'technonlogy, computers, it, code'
console.log(w.split(', '))

// arrays

const number = new Array(1,2,3,4);
console.log(number);

const fruits = ['apples', 'bananas', 'watermelon'];
console.log(fruits);

console.log(fruits[2]);

fruits.push('mangoes'); // add an element to the array
console.log(fruits);

fruits.unshift('Pears') //add to the 1st element
console.log(fruits);

fruits.pop(); //remove from the last element in the array
console.log(fruits);

console.log(Array.isArray(fruits)); // checking if is an arrays

console.log(fruits.indexOf('bananas')); //checking for the indec of an element in array

const person = {
    firstName: 'Iain',
    lastName: 'Mosima',
    age: 20,
    hobbies: ['music', 'movie', 'sports'],
    address: {
        city: 'juja',
        houseNumber: 'B31'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[2])
console.log(person.address.houseNumber);

const {firstName, lastName, address: {city}} = person;
console.log(firstName, lastName, city);

// Adding a property
person.email = 'mosimaiain@gmail.com';
console.log(person);

const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting up with the boss',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Study hard',
        isCompleted: true
    }
];
console.log(todos[2].text);

// Converting to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// for loop
for(let i = 0; i < 10; i++){
    console.log(`For loop number: ${i}`);
}

// while loop
let i = 0;
while(i < 10){
    console.log(`While loop number: ${i}`);
    i++;
}

// looping through an array
for(let todo of todos){
    console.log(todo.id);
}

// high order array methods
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todotext = todos.map(function(todo){
   return todo.text;
});
console.log(todotext);

const todotextiscomplete = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text
});
console.log(todotextiscomplete);

// condtions
const a = 6;
const b = 11;

if (a > 5 || y > 10){
    console.log('a is more than 5 or y is more than 20');
} else if (a > 5 && y > 10){
    console.log('a is more than 5 and y is more than 20');
} else {
    console.log('a is less than 10')
}


const r = 11;

const color = r > 10 ? 'red' : 'blue';

console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break
    case 'blue':
        console.log('color is blue');
        break
    default:
        console.log('color is not red or blue');
        break
}

// functions
function addNums(num1 = 1, num2 = 2) {
    return num1 + num2;
}
console.log(addNums(11,10))

// arrow functions
const addNums2 = (num1 = 1, num2 = 2) => num1 + num2;
console.log(addNums2(31,10));

// todos.forEach(todo => console.log(todo));

const todonotcomplete = todos.filter(todo => todo.isCompleted == false).map(todo => todo.text);
console.log(todonotcomplete);

// Objects
// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.getfullName = function () {
    return `${this.firstName} ${this.lastName}`;
}




// // Instantiate object
const person1 = new Person('Iain', 'Mosima', '12-20-2001');
const person2 = new Person('Mary', 'Jane', '4-20-2001');

console.log(person1);
console.log(person2.dob.getDate());

console.log(person1.getfullName());
console.log(person1.getBirthYear());

console.log(person1)


// Class
class Person_c {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getfullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

person3 = new Person_c('Cynthia', 'Kemunto', '10-6-2007');
console.log(person3);

// 1:11:13
// https://www.youtube.com/watch?v=hdI2bqOjy3c