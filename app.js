// const payRateUSD = 80;
// const projectHours = 40;
// const availableHours = (11 - 2) * 5;
// console.log("Смогу ли я работать? " + (availableHours > projectHours));
// console.log("Стоимость работ: " + projectHours * payRateUSD);
// const deposit = 12000;
// const rate = 0.07;
// const depositLength = 24;
// const houseCost = 13500;

// const res = deposit * (1 + rate / 12) ** 24;
// if (res > houseCost) {
//   console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
// } else {
//   console.log(`Купить не сможем`);
// }
// Есть детская игра FizzBuzz, где нужно назвать число и:
// Если число делится на 3, вместо него надо сказать «Fizz».
// Если число делится на 5, вместо него надо сказать «Buzz».
// А если число делится одновременно на 3 и на 5, то надо вместо него сказать «FizzBuzz»
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log("Fizz");
//   }
//   if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// При помощи цикла for выведите чётные числа от 2 до 10.
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0;
// while (i < 3);
// {
//   alert(`number ${i}!`);
//   i++;
// }
//  let num;
//  do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);
//  if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
//  } else if (browser === 'Chrome'
//   || browser === 'Firefox'
//   || browser == 'Safari'
//   || browser == 'Opera') {
//   alert ( 'Okay we support these browsers too' );
//   } else{
//     alert( 'We hope that this page looks ok!' );
//   }
// const number = +prompt('Введите число между 0 и 3', '');
// switch(number){
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;
//     case 2:
//     case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// function checkAge(age){
//   return( age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return( age > 18 ) || confirm('Родители разрешили?');
// }

// function checkAge(age){
//   if( age > 18){
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function min(a, b) {
//   return a < b ? a : b;
// }

// function pow(x,n){
//   let result = x;

// }

// function ask(question, yes, no){
//   if (confirm(question)) yes()
//     else no();
// }
// ask(
//   "Вы согласны",
//   () => alert('вы')
// // );

// function log() {
//   console.log("aboba")
// }
// let d = log()
// let c = log

// let user = {};
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for(let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum);

// function multiplyNumeric(obj){
//   for(let key in obj) {
//     if (typeof obj[key] == 'number'){
//       obj[key] *= 2;
//     }
//   }
// }

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// // давайте скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
// }

// function processString(str) {
//   return {
//     upperCase: str.toUpperCase(),
//     lowerCase: str.toLowerCase(),
//     trimmed: str.trim(),
//     firstChar: str.firstChar,
//     length: str.length,
//   };
// }

// console.log(processString("  Hello, World!  "));

// function processString(str) {
//   return {
//     upperCase: str.toUpperCase(),
//     lowerCase: str.toLowerCase(),
//     trimmed: str.trim(),
//     firstChar: str.trim().at(0),
//     length: str.length,
//   };
// }

// console.log(processString("  Hello, World!  "));

// function anagram(s1, s2) {
//   s1 = s1.toLowerCase().split("").sort().join("");
//   s2 = s2.toLowerCase().split("").sort().join("");
//   return s1 === s2;
// }
// console.log(anagram("", "")); // true
// console.log(anagram("123", "123")); // true
// console.log(anagram("bumdle", "dumble")); // true
// console.log(anagram("aboba", "baoab")); // true
// console.log(anagram("a", "")); // false
// console.log(anagram("ab", "a")); // false
// console.log(anagram("ab", "cd")); // false
// console.log(anagram("codewars", "hackerrank")); //false

// Задача 1. Теперь давайте сделаем функцию, которая вычислит сумму всей покупки.
// Дайте функции понятное название и добавьте такие правила: нужно проверять, является ли цена числом, суммируем только положительные цены,
// а если находим не число или отрицательное число, то выдаем ошибку при помощи throw.

// const items = [{ price: 10 }, { price: 20 }, { price: 30 }, { price: 40 }];
// function priceSum(items) {
//   let sum = 0;
//   for (let i = 0; i < items.length; i++) {
//     if (typeof items[i].price === "number" && items[i].price > 0) {
//       sum += items[i].price;
//     }
//   }
//   return sum;
// }
// console.log(priceSum(items));

// Задача 2. Возьмите этот объект и для нее напишите метод, которая дополняет ее товарами по примеру тех, которые уже есть.
// Функция принимает название каталога, название и стоимость товара. Если каталога не существует, то его необходимо создать и добавить туда товар.
// Также сделать проверку на ввод числа, функция должна принимать числа даже в строке, но при вводе строки выводить NaN.
// const purchase = {
//   Electronics: [
//       { name: 'Laptop', price: 1500 },
//       { name: 'Keyboard', price: 100 }
//   ],
//   Textile: [
//       { name: 'Bag', price: 50 },
//       { name: 'Laptop', price: 100 }
//   ],
// };

// console.log(purchaseCatalogs('Electronics', 'Laptop', 1500))
// let user = {
//   name: "john",
//   age: 30,
// };
// let clon = {};

// for (let key in user) {
//   clon[key] = user[key];
// }
// clon.name = "pete";
// console.log(user.name);
// console.log(clone.name);

// let user = { name: "john" };
// let permi = { canv: true };
// let perm = { cane: true };

// Object.assign(user, permi, perm);
// console.log(user);

// let user = {
//   name: "john",
//   greet: () => {
//     console.log(`привет, ${this.name}`);
//   },
// };
// user.greet();
// Задача 2. Возьмите этот объект и для нее напишите метод, которая дополняет ее товарами по примеру тех, которые уже есть.
// Функция принимает название каталога, название и стоимость товара. Если каталога не существует, то его необходимо создать и добавить туда товар.
// Также сделать проверку на ввод числа, функция должна принимать числа даже в строке, но при вводе строки выводить NaN.
const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
  ],
  Textile: [
    { name: "Bag", price: 50 },
    { name: "Laptop", price: 100 },
  ],
};

console.log(purchaseCatalogs("Electronics", "Laptop", 1500));
