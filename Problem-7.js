var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];
  if (!uniqueNumbers.includes(currentNumber)) {
    uniqueNumbers.push(currentNumber);
  }
}

console.log(uniqueNumbers);