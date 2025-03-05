// деструктуризация
// пример с переменной
// let [s10, ...s11] = [10, 20, 30, 40];
// console.log(s11);
// const a = [10, 20, 30, 40];

// let [s10, s11] = a;
// console.log(s11);

// ---------------------------------------------learnjs------------------------------------------------------------------
// let arr = ["John", "Kantor"];
// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);
// ------------------------------------------------
// let [firstName, surname] = "Ilya Kantor".split(" ");
// console.log(firstName);
// console.log(surname);
// ------------------------------------------------
// let [firstName, , title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];
// console.log(title);
// ------------------------------------------------
// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(" ");
// console.log(user.name);
// console.log(user.surname);
// ------------------------------------------------
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };

//   // { sourceProperty: targetVariable }
//   let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title
//--------------------------------------------------
//Задание 1
// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isadmin = false } = user;
// console.log(user.name);
// console.log(age);
// console.log(isadmin);

// Задание 2
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.
// let date = new Date(2005, 11, 26, 3, 4);
// console.log(date);

// Задание 3
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };
// let user2 = JSON.stringify(user);

// Задание 4
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumTo(100)); // 5050

// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }
// console.log(sumTo(100));

// ------------------------------------------------gpt---------------------------------------------------------------
// Задача 1: Сумма элементов массива
// Условие: Напишите функцию sumArray, которая принимает массив чисел и возвращает их сумму.
// function sumArray(arr) {
//   return arr.reduce((acc, num) => acc + num);
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

// Задача 2: Фильтрация четных чисел
// Условие: Напишите функцию filterEven, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.
// function filterEven(arr) {
//   return arr.filter((num) => num % 2 === 0);
// }
// console.log(filterEven([1, 2, 3, 4, 5]));

// Задача 3: Поиск максимального элемента
// Условие: Напишите функцию findMax, которая принимает массив чисел и возвращает максимальный элемент.
// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([1, 2, 3, 4, 5]));

// Задача 4: Удаление дубликатов
// Условие: Напишите функцию removeDuplicates, которая принимает массив и возвращает новый массив без дубликатов.
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Задача 5: Преобразование массива строк в верхний регистр
// Условие: Напишите функцию toUpperCaseArray, которая принимает массив строк и возвращает новый массив, где все строки преобразованы в верхний регистр.
// function toUpperCaseArray(arr) {
//   return arr.map((str) => str.toUpperCase());
// }
// console.log(toUpperCaseArray(["apple", "banana", "cherry"]));

// Задача 6: Поиск элемента в массиве
// Условие: Напишите функцию findElement, которая принимает массив и элемент, и возвращает true, если элемент найден, и false в противном случае.
// function findElement(arr, element) {
//   return arr.includes(element);
// }
// console.log(findElement([1, 2, 3, 4], 4));
// console.log(findElement([1, 2, 3, 4, 5], 6));

// Задача 7: Объединение массивов
// Условие: Напишите функцию concatArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы обоих массивов.
// function concatArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// console.log(concatArrays([1, 2, 3], [4, 5, 6]));

// Задача 8: Проверка, все ли элементы удовлетворяют условию
// Условие: Напишите функцию allPositive, которая принимает массив чисел и возвращает true, если все числа положительные, и false в противном случае.
// function allPositive(arr) {
//   return arr.every((num) => num > 0);
// }
// console.log(allPositive([1, 2, 3, 4]));
// console.log(allPositive([1, -2, 3, 4]));

// Задача 9: Поиск индекса элемента
// Условие: Напишите функцию findIndex, которая принимает массив и элемент, и возвращает индекс первого вхождения элемента. Если элемент не найден, верните -1.
// function findIndex(arr, element) {
//   return arr.indexOf(element);
// }
// console.log(findIndex([10, 20, 30, 40], 20));
// console.log(findIndex([10, 20, 30, 40], 50));

// Задача 10: Подсчет количества элементов
// Условие: Напишите функцию countOccurrences, которая принимает массив и элемент, и возвращает количество вхождений элемента в массиве.
// function countOccurrences(arr, element) {
//   return arr.reduce((acc, num) => (num === element ? acc + 1 : acc), 0);
// }
// console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));

// Задача 11: Сортировка массива
// Условие: Напишите функцию sortArray, которая принимает массив чисел и возвращает новый массив, отсортированный по возрастанию.
// function sortArray(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5]));

// Задача 12 : Поиск пересечения массивов
// Условие: Напишите функцию findIntersection, которая принимает два массива и возвращает новый массив, содержащий элементы, которые есть в обоих массивах.
// function findIntersection(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
//   }

// Задача 13: Разница массивов
// Условие: Напишите функцию findDifference, которая принимает два массива и возвращает новый массив, содержащий элементы, которые есть в первом массиве, но отсутствуют во втором.
// function findDifference(arr1, arr2) {
//     return arr1.filter(item => !arr2.includes(item));
//   }

// --------------------------------------------roundmap------------------------------------------------------------------------------------------------------
// const obj = {
//   number: 0,

//   valueOf() {
//     this.number++;
//     if (this.number === 1) {
//       return -1;
//     } else {
//       return 1;
//     }
//   },
// };
// console.log(String(obj < 0) + String(obj < 0)); // "truefalse"
