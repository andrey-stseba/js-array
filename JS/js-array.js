"use strict";

// 0 Создать числовой массив и проинициализировать его (*случайными числами).

const arr1 = [];

for (let i = 0; i < 30; i++) {
  const numericArray = Math.floor(Math.random() * 100 - 50);
  arr1.push(numericArray);
}

console.log(arr1);

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.

arr1.pop();
console.log(arr1);

arr1.push(33);
console.log(arr1);

arr1.unshift(23);
console.log(arr1);

// 2 Вывести размер массива.

console.log(`размер массива: ${arr1.length} элемент`);

// 3 Вывести элементы с четными индексами.

console.group(`Вывести элементы с четными индексами из масива arr1`);
arr1.forEach(showEvenIndex);
console.groupEnd();
function showEvenIndex(currentItem, index, array) {
  if (index % 2 === 0) {
    console.log(`номер индекса масива ${index} : ${currentItem}`);
  }
}

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).

console.group(`Вывести только четные элементы из масива arr1`);
arr1.forEach(showEvenItem);
console.groupEnd();

function showEvenItem(currentItem, index, array) {
  if (currentItem % 2 === 0) {
    console.log(`номер индекса масива ${index} : ${currentItem}`);
  }
}

// 5 Вывести индексы нулевых элементов (элемент равен нулю).
console.group(`Вывести индексы нулевых элементов из масива arr1`);
arr1.forEach(showZeroItem);
console.groupEnd();

function showZeroItem(currentItem, index, array) {
  if (currentItem === 0) {
    console.log(`номер индекса масива ${index} : ${currentItem}`);
  }
}

// 6 Подсчитать количество нулевых элементов.

console.group(`Подсчитать количество нулевых элементов из масива arr1`);

const quantityZeroItem = arr1.filter(snowQuantityZeroItem);

console.log(`количество нулевых элементов - ${quantityZeroItem.length}`);

function snowQuantityZeroItem(currentItem, index, array) {
  return currentItem === 0;
}

console.groupEnd();

/* *********************  / Методы перебора массивов. / ********************** */

// 7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).

const arr2 = [];

for (let i = 0; i < 20; i++) {
  const numericArray = Math.floor(Math.random() * 100 - 50);
  arr2.push(numericArray);
}
console.log(arr2);

console.group(
  `Получить новый массив из заданного, который будет содержать только положительные числа`
);
const arr3 = arr2.filter(onlyPositiveItem);
console.log(arr3);
console.groupEnd();

function onlyPositiveItem(currentItem, index, array) {
  return currentItem > 0;
}

// 8 Получить новый массив из заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).

console.group(
  `Получить новый массив из заданного, который будет содержать все элементы исходного, возведенные в квадрат`
);
const arr4 = arr2.map(itemInSquared);
console.log(arr4);
console.groupEnd();

function itemInSquared(currentItem, index, array) {
  return Math.pow(currentItem, 2);
}

// 9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).

console.group(
  `Проверить, являются ли все елементы массива положительными числами`
);

if (arr2.every((element) => element > 0)) {
  console.log("ДА, являются");
} else {
  console.log("НЕ являются");
}
console.groupEnd();

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.

console.group(`Проверить, есть ли в массиве хоть один отрицательный элемент.`);

if (arr2.some(oneNegativeItem)) {
  console.log("ДА есть");
} else {
  console.log("НЕТ");
}

console.groupEnd();

function oneNegativeItem(currentItem, index, array) {
  let negativeItem;
  return (negativeItem = currentItem < 0);
}

// 11 Вывести элементы массива, возведенные в куб.

console.group(`Вывести элементы массива, возведенные в куб.`);
arr2.forEach(itemInСubed);
console.groupEnd();
function itemInСubed(currentItem, index, array) {
  return console.log(
    `Элементы массива, возведенные в куб: ${Math.pow(currentItem, 3)}`
  );
}

// *12 Прописать для MyArray метод unshift.
