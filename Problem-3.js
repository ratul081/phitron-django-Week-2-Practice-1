let numbers = [20, 15, 10, 5, 1, 19, 18, 17, 16, 14, 13, 12, 11, 9, 8, 7, 6, 4, 3, 2];

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let sortedArray = selectionSort(numbers);

console.log(sortedArray);