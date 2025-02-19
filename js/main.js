// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let x = +prompt("Ввести первое число", "");
let y = +prompt("Ввести второе число", "");
alert(x + y);

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("Вася"));

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
function extractCurrencyValue(str) {
  return str.slice(1);
}
console.log(extractCurrencyValue("$120"));

// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
console.log(styles.shift());
styles.unshift("Рэп", "Регги");

let arr = [5, 2, 1, -10, 8];
arr.sort((x, y) => y - x);
console.log(arr); // 8, 5, 2, 1, -10

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((items) => items.name);
console.log(names); // Вася, Петя, Маша

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
function sortByAge(users) {
  arr.sort((x, y) => x.age - b.age);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
coonsle.log(arr[0].name); // Вася
coonsle.log(arr[1].name); // Маша
coonsle.log(arr[2].name); // Петя
