"use strict"; /*dajemy na samej górze*/

const myVariable = "Hello World";
const myName = "Tomasz";

var isAdmin = true; /*zmienna 1*/

const myConstatnVariable = true; /*zmienna sposób 2*/

let counter = 0; /*pozwala nadpisywać zmienne*/

counter = counter + 1;
counter = counter + 1;
counter = counter + 1;
counter++;

console.log(counter);
console.log(myVariable + "!");

//string ciągi znaków

let firstName = "Marcin";
let lastName = "Pałczyński";
console.log(firstName + " " + lastName); //stary sposób dodawania zmiennych
console.log(`${firstName} :: ${lastName} !!!`); //nowy spopsób dodawania zmiennych

//numbers

let children = 2;
let icecream = 4;

console.log(String(icecream - children));

let isAdmin = false;
let isLoggedIn = true;

let gender = null; //deklaracja zmiennej
gender = "male"; //nadpisanie zmiennej

//undefined - zmienna niezdefiniowana

let hasDog = undefined;

let notANumber = NaN; //not a number

let person = {
  fullName: "Jan kowalski",
  age: 38,
  knowsHowToCode: "partially",
  hasDogs: true,
  dogs: [{ name: "Emilk", age: 13 }],
  gender: null,
};

console.log(person);
console.log(person.hasDogs);
console.log(person.dogs);
console.log(person.dogs[0]);
console.log(person.dogs[0].name);
console.log(`${person.dogs[0].name} is ${person.dogs[0].age} years old`);

//indeksy      0 1  2   3   4

let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);
console.log(numbers[3]);

//FUNKCJE

//operator "LUB" to ||

//definicja funkcji
function firstFN() {
  console.log("My first function!");
}

//wywołanie funkcji

firstFN();
firstFN();
firstFN();

export { myName };

//==================================

for (let i = 0; i < 5; i++) {
  console.log(i);
}
/* 1. i
2. warunek
3. wywolanie loop
4. podniesienie i o 1
*/
