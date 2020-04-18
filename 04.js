// Задан упорядоченный по возрастанию массив.
// Реализовать алгоритм бинарного поиска для нахождения значения в массиве.
// Вернуть номер элемента или уведомить что такого элемента нет.

function binarySearch(element, array) {
  let i = 0;
  let j = array.length;
  let k;

  while (i < j) {
    k = Math.floor((i + j) / 2);
    if (element <= array[k]) j = k;
    else i = k + 1;
  }

  if (array[i] === element) return i;
  else return -1; // Если искомого элемента в массиве нет
}

arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

console.log(binarySearch(10, arr1)); // ---> 10 индекс искомого элемента
