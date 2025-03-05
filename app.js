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
// // user.greet();
// function processString(str) {}

// 1) Напиши функцию processString, которая принимает строку в качестве аргумента и возвращает объект в сл. виде.
// processString("  Hello, World!  ")
/*{
  upperCase: "  HELLO, WORLD!  ",
  lowerCase: "  hello, world!  ",
  trimmed: "Hello, World!",
  firstChar: "H",
  length: 16
}
*/
// function processString(str) {}
// processString("  Hello, World!  ");

// function processString(str) {
//   return {
//     upperCase: str.toUpperCase(),
//     lowerCase: str.toLowerCase(),
//     trimmed: str.trim(),
//     firstChar: str.trim()[0],
//     length: str.length,
//   };
// }
// console.log(processString("  Hello, World!  "));

// 3) Создать копию массива через reduce, где все элементы массива будут в 2 раза больше
// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, value) => {
//   acc.push(value * 2);
//   return acc;
// }, []);

// console.log(result);

// Задача 1. Теперь давайте сделаем функцию, которая вычислит сумму всей покупки.
// Дайте функции понятное название и добавьте такие правила: нужно проверять, является ли цена числом, суммируем только положительные цены,
// а если находим не число или отрицательное число, то выдаем ошибку при помощи throw.
// const items = [{ price: 10 }, { price: 20 }, { price: 30 }, { price: 40 }];
// function pricesum(items) {
//   let sum = 0;
//   for (let i = 0; i < items.length; i++) {
//     if (typeof items[i].price === "number" && items[i].price > 0) {
//       sum += items[i].price;
//     }
//   }
//   return sum;
// }
// console.log(pricesum(items));

// Задача 5. Найти вес всех вещей, цена которых более 80 и количество менее 7
// const foods = [
//   { name: "Паста болоньезе", weight: 350, price: 33, quanity: 3 },
//   { name: "Спаггети", weight: 350, price: 56, quanity: 8 },
//   { name: "Суп", weight: 400, price: 68, quanity: 16 },
//   { name: "Пицца", weight: 675, price: 139, quanity: 30 },
//   { name: "Молоко", weight: 1600, price: 339, quanity: 8 },
//   { name: "Овощи", weight: 740, price: 159, quanity: 1 }, // +
//   { name: "Сыр", weight: 230, price: 99, quanity: 4 },
//   { name: "Мука", weight: 230, price: 69, quanity: 5 },
// ];
// let totalWeight = 0;
// for (let i = 0; i < foods.length; i++) {
//   if (foods[i].price > 80 && foods[i].quanity < 7) {
//     totalWeight += foods[i].weight;
//   }
// }

// console.log(totalWeight);
// function anagram(s1, s2) {
//   if (s1.length !== s2.length) return false;
//   return s1.split("").sort().join("") === s2.split("").sort().join("");
// }

// console.log(anagram("", "")); // true
// console.log(anagram("123", "123")); // true
// console.log(anagram("bumdle", "dumble")); // true
// console.log(anagram("aboba", "baoab")); // true
// console.log(anagram("a", "")); // false
// console.log(anagram("ab", "a")); // false
// console.log(anagram("ab", "cd")); // false
// console.log(anagram("codewars", "hackerrank")); //false

// let str = "cat";

// function rotateString(str) {
//   const arr = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     let last = arr.pop();
//     arr.unshift(last);
//     console.log(arr.join(""));
//   }
// }

// rotateString(str);

// function alphabetPosition(str) {
//   const alph = 'abcdefghijklmnopqrstuvwxyz';
//   return Array.from(str.toLowerCase()).filter((alph) => )
// }

// const string = "The sunset sets at twelve o' clock.";
// console.log(alphabetPosition(string));

// function alphabetPosition(str) {
//   const alph = "abcdefghijklmnopqrstuvwxyz";
//   let res = [];
//   for (const text of str.toLowerCase()) {
//     let index = alph.indexOf(text);
//     if (index !== -1) {
//       res.push(index + 1);
//     }
//   }
//   return res.join(" ");
// }

// const string = "The sunset sets at twelve o' clock.";
// console.log(alphabetPosition(string));

function alphabetPosition(str) {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let text = str[i].toLowerCase();
    let index = alph.indexOf(text);
    if (index !== -1) {
      res.push(index + 1);
    }
  }
  return res.join(" ");
}

const string = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(string));
