// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// let x = +prompt("Ввести первое число","");
// let y = +prompt("Ввести второе число","");
// alert(x + y);

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("Вася"));

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// function extractCurrencyValue(str) {
//   return str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));

// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles.shift());
// styles.unshift("Рэп","Регги");

// let arr = [5, 2, 1, -10, 8];
// arr.sort((x, y) => y - x);
// console.log(arr); // 8, 5, 2, 1, -10

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((items) => items.name);
// console.log(names); // Вася, Петя, Маша

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// function sortByAge(users){
//   arr.sort((x,y) => x.age - b.age);
// }
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// coonsle.log(arr[0].name); // Вася
// coonsle.log(arr[1].name); // Маша
// coonsle.log(arr[2].name); // Петя

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
