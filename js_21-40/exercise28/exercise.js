function sum(...number) {
  let total = 0;
  for (const numero of number) {
    total += numero;
  }
  return total;
}

const numbers = [1, 2, 3];


console.log(sum(numbers[0], numbers[1], numbers[2]));