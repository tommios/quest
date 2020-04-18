//
// Задан массив целых чисел.
// Написать функцию нахождения максимального элемента в массиве.
//

function maxElementInArray(array) {
  let maxElement = array[0];
  for (let i = 1, end = array.length; i < end; i++) {
    if (array[i] > maxElement) maxElement = array[i];
  }

  return maxElement;
}

arr1 = [2, 4, 8, 3, 6, 9, 0, 45, 67, 34];
arr2 = [45, 23, 12, 5, 9, 72, 3, 8, 56];

console.log(maxElementInArray(arr1)); // --> 67
console.log(maxElementInArray(arr2)); // --> 72
