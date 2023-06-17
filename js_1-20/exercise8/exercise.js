function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    let mult = value * number;
    return mult;
  }
  return inner;
}
console.log(multiplyByTwo(4)());
