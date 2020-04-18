//
// Реализовать функцию сортировки пузырьком
//

function bubbleSort(array) {
  for (var i = 0, endI = array.length - 1; i < endI; i++) {
    // Флаг wasSwap - если за очередной проход по массиву не произошло ни одной перестановки,
    //  значит массив уже отсортирован
    var wasSwap = false;

    for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (array[j] > array[j + 1]) {
        var swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
        wasSwap = true;
      }
    }

    if (!wasSwap) break;
  }

  return array;
}

arr1 = [34, 25, 65, 78, 92, 3, 8, 5, 39, 112];
bubbleSort(arr1);
console.log(arr1);

arr2 = [15, 2, 8, 245, 17, 64, 84, 345, 632, 32, 67, 89];
bubbleSort(arr2);
console.log(arr2);
