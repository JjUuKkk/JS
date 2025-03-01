// let range = {
//   from: 1,
//   to: 9,
// };
// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
// for (let num of range) {
//   console.log(num);
// }

// ------------------------------------------learnjs-----------------------------------------------------------------------------
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(unique(values));

//----------------------------------------------map----------------------------------------------------------------------------------
// Задача 1: Удвоить каждый элемент массива
// Условие: Дан массив чисел. Создайте новый массив, в котором каждый элемент будет удвоен.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.map((num) => num * 2);
// console.log(res);

// Задача 2: Преобразовать числа в строки
// Условие: Дан массив чисел. Преобразуйте каждый элемент массива в строку.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.map((num) => num.toString());
//

// Задача 3: Извлечь имена из массива объектов
// Условие: Дан массив объектов, где каждый объект содержит информацию о пользователе. Создайте новый массив, содержащий только имена пользователей.
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// let names = users.map((user) => user.name);
// console.log(names);

// Задача 4: Добавить текст к каждому элементу массива
// Условие: Дан массив строк. Добавьте к каждой строке текст " is cool".
// let words = ["JavaScript", "Python", "React"];
// let strings = words.map((word) => word + " is cool");
// console.log(strings);

// Задача 5: Преобразовать массив температур из Цельсия в Фаренгейт
// Условие: Дан массив температур в градусах Цельсия. Преобразуйте их в градусы Фаренгейта по формуле: F = C * 1.8 + 32.
// let celsius = [0, 10, 20, 30];
// let gradus = celsius.map((celsi) => celsi * 1.8 + 32);
// console.log(gradus);

// Задача 6: Преобразовать массив чисел в массив объектов
// Условие: Дан массив чисел. Преобразуйте его в массив объектов, где каждое число будет значением свойства value.
// let numbers = [1, 2, 3, 4];
// let objects = numbers.map((num) => ({ value: num }));
// console.log(objects);

// Задача 7: Преобразовать массив строк в массив чисел
// Условие: Дан массив строк, представляющих числа. Преобразуйте его в массив чисел.
// let stringNumbers = ["1", "2", "3", "4"];
// let numbers = stringNumbers.map((str) => Number(str));
// console.log(numbers);

// Задача 8: Преобразовать массив объектов в массив строк
// Условие: Дан массив объектов, где каждый объект содержит имя и возраст. Преобразуйте его в массив строк вида "Имя: возраст".
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// let stringUser = users.map((user) => `${user.name}: ${user.age}`);
// console.log(stringUser);

// Задача 9: Преобразовать массив чисел в массив их индексов
// Условие: Дан массив чисел. Создайте новый массив, содержащий индексы этих чисел.
// let numbers = [10, 20, 30, 40];
// let indexNew = numbers.map((num, index) => index);
// console.log(indexNew);

//----------------------------------------------reduce----------------------------------------------------------------------------------
// Задача 1: Сумма элементов массива
// Условие: Дан массив чисел. Найдите сумму всех элементо
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, num) => acc + num);
// console.log(sum);

// Задача 2: Произведение элементов массива
// Условие: Дан массив чисел. Найдите произведение всех элементов.
// let numbers = [1, 2, 3, 4, 5];
// let proiz = numbers.reduce((acc, num) => acc * num);
// console.log(proiz);

// Задача 3: Поиск максимального элемента в массиве
// Условие: Дан массив чисел. Найдите максимальный элемент.
// let numbers = [10, 5, 20, 15, 30];
// let max = numbers.reduce((acc, num) => (num > acc ? num : acc));
// console.log(max);

// Задача 4: Поиск минимального элемента в массиве
// Условие: Дан массив чисел. Найдите минимальный элемент.
// let numbers = [10, 5, 20, 15, 30];
// let min = numbers.reduce((acc, num) => (num < acc ? num : acc));
// console.log(min);

// Задача 5: Объединение всех строк массива в одну
// Условие: Дан массив строк. Объедините все строки в одну.
// let words = ["Hello", " ", "world", "!"];
// let strings = words.reduce((acc, word) => acc + word);
// console.log(strings);

// Задача 6: Подсчет количества элементов в массиве
// Условие: Дан массив. Подсчитайте количество элементов в нем.
// let numbers = [1, 2, 3, 4, 5];
// let count = numbers.reduce((acc, num) => acc + 1);
// console.log(count);

// Задача 7: Подсчет суммы всех четных чисел в массиве
// Условие: Дан массив чисел. Найдите сумму всех четных чисел.
// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = numbers.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);
// console.log(sum);
