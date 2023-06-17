/* const sum = function (a, b) {
  return a + b;
} */



/* const subtract = function (a, b) {
  return a - b;
} */


/* const multiply = function (a, b) {
  return a * b;
}
 */


/* const divide = function (a, b) {
  return a / b;
} */
let sum = (a, b) => a + b ;
let subtract = (a, b) => a - b ;
let multiply = (a, b) => a * b ;
let divide = (a ,b ) => a / b ; 

/* const log = function (value) {
  console.log(value);
} */
let totale = divide((subtract(multiply(sum(2,4),sum(5,2)),2)),5)
let log2 = () => console.log('((2 + 4) * (5 + 2) - 2) / 5)');
let log = () => console.log(totale);
log();
log2();