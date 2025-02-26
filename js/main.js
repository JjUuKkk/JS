// Задание 2
// // Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("Вася"));

// Задание 3
// // Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// // Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// function extractCurrencyValue(str) {
//   return str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));

// Задание 4
// // Давайте произведём 5 операций с массивом.
// // Создайте массив styles с элементами «Джаз» и «Блюз».
// // Добавьте «Рок-н-ролл» в конец.
// // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// // Удалите первый элемент массива и покажите его.
// // Вставьте Рэп и Регги в начало массива.
// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");

// Задание 5
// let arr = [5, 2, 1, -10, 8];
// arr.sort((x, y) => y - x);
// console.log(arr); // 8, 5, 2, 1, -10

// Задание 6
// // У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// // Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((items) => items.name);
// console.log(names); // Вася, Петя, Маша

// Задание 7
// // Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// function sortByAge(users) {
//   arr.sort((x, y) => x.age - b.age);
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// coonsle.log(arr[0].name); // Вася
// coonsle.log(arr[1].name); // Маша
// coonsle.log(arr[2].name); // Петя

// 1.  Задача: Напишите функцию greet(name), которая принимает имя в качестве аргумента и возвращает приветствие в формате "Привет, [name]!".
// function greet(name) {
//   return "Привет, " + name + "!";
// }
// console.log(greet("Женя"));

// 2.  Задача: Напишите функцию add(a, b), которая принимает два числа в качестве аргументов и возвращает их сумму.
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5));

// 3.  Задача: Создайте объект person с полями name (строка) и age (число).
// const person = {
//   name: "Anna",
//   age: "25",
// };
// console.log(person.age);

// 4.  Задача: Создайте объект dog с полями name, breed и методом bark(), который выводит в консоль "Гав!".
// const dog = {
//   name: "John",
//   breed: "Дворняга",
//   bark() {
//     console.log("Гав!");
//   },
// };
// dog.bark();

// 5.  Задача: Создайте объект calculator с методами add(a, b) и multiply(a, b), которые возвращают сумму и произведение двух чисел соответственно. Используйте this для доступа к свойствам объекта, если это необходимо.
// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(2, 3));
// console.log(calculator.multiply(4, 5));

// 6.  Задача: Создайте объект person с полями firstName и lastName, а также методом getFullName(), который возвращает полное имя человека (объединяя firstName и lastName).
// const person = {
//   firstName: "Иван",
//   lastName: "Иванов",
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person.getFullName());

// 7.  Задача: Напишите функцию isEven(number), которая принимает число в качестве аргумента и возвращает true, если число четное, и false, если число нечетное
// function isEven(number) {
//   return number % 2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(3));

// 8.  Задача: Напишите функцию reverseString(str), которая принимает строку в качестве аргумента и возвращает ее в обратном порядке.
// function reverseString(str) {
//   return str.split("").reverse("").join("");
// }
// console.log(reverseString("женя"));

// 9. Задача: Напишите функцию isPalindrome(str), которая принимает строку в качестве аргумента и возвращает true, если строка является палиндромом (читается одинаково в обоих направлениях), и false, если нет.
// function isPalindrome(str) {
//   const reverseStr = str.split("").reverse("").join("");
//   return str === reverseStr;
// }
// console.log(isPalindrome("шалаш"));

// 10. Задача: Напишите функцию stringLength(str), которая принимает строку в качестве аргумента и возвращает длину этой строки.
// function stringLength(str) {
//   return str.length;
// }
// console.log(stringLength("Hello"));

// 11. Задача: Напишите функцию toUpper(str), которая принимает строку в качестве аргумента и возвращает эту строку в верхнем регистре.
// function toUpper(str) {
//   return str.toUpperCase();
// }
// console.log(toUpper("hello"));

// 12. Задача: Напишите функцию max(a, b), которая принимает два числа в качестве аргументов и возвращает большее из них.
// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(max(4, 6));

// function max(a, b) {
//   return a > b ? a : b;
// }
// console.log(max(4, 6));

// 13. Задача: Напишите функцию printNumbers(n), которая принимает число n в качестве аргумента и выводит в консоль числа от 1 до n (включительно). Используйте цикл for.
// function printNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// printNumbers(10);

// 14. Задача: Напишите функцию sumArray(arr), которая принимает массив чисел в качестве аргумента и возвращает сумму всех элементов массива.
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4]));

// function sumArray(arr) {
//   return arr.reduce((sum, current) => sum + current, 0);
// }
// console.log(sumArray([1, 2, 3, 4]));

// 15. Задача: Напишите функцию contains(arr, element), которая принимает массив и элемент в качестве аргументов и возвращает true, если элемент присутствует в массиве, и false в противном случае.
// •   Пример: contains([1, 2, 3], 2) должна вернуть true, а contains([1, 2, 3], 4) должна вернуть false.
// function contains(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(contains([1, 2, 3], 4));
// function contains(arr, element) {
//   return arr.includes(element);
// }
// console.log(contains([1, 2, 3], 4));

// 16. Задача: Создайте объект person со свойствами name (строка), age (число) и greet (функция, которая возвращает строку "Привет, меня зовут [имя] и мне [возраст] лет!").
// const person = {
//   name: "John",
//   age: 24,
//   greet() {
//     console.log(
//       "Привет " + "меня зовут " + this.name + " и мне " + this.age + " года!"
//     );
//   },
// };
// person.greet();

// 17. Условие: Создайте объект person с ключом name и методом sayName. Метод sayName должен выводить в консоль имя объекта (значение ключа name), используя this.
// const person = {
//   name: "john",
//   sayname() {
//     console.log("Меня зовут " + this.name);
//   },
// };
// person.sayname();
// 18. Условие: Создайте объект calculator с ключом value, изначально равным 0, и методом add(num).  Метод add(num) должен прибавлять num к значению value объекта, используя this, и возвращать новое значение value.
// const calculator = {
//   value: 0,
//   add(num) {
//     this.value += num;
//     return this.value;
//   },
// };
// console.log(calculator.add(6));
// console.log(calculator.add(11));
// console.log(calculator.value);

// 19.  Условие: Создайте объект obj с методом myMethod.  Внутри myMethod используйте стрелочную функцию для вывода значения this.
// const obj = {
//   value: 5,
//   myMethod() {
//     const arrow = () => {
//       console.log(this.value);
//     };
//     arrow();
//   },
// };
// obj.myMethod();

// 20. Условие: Дан массив чисел. Используя цепочку методов массива (map, filter, reduce) и стрелочные функции, выполните следующие действия:
//   1. Оставьте только четные числа.
//   2. Умножьте каждое оставшееся число на 3.
//   3. Вычислите сумму получившихся чисел.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((sum, num) => sum + num, 0);
console.log(result);

// Roundmap
// const obj = {};
// console.log(String(obj !== 0) + String(obj < 0));
