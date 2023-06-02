function sumUntil(maxValue) {
  let output = 0 ;
  for ( let i= maxValue;i > 0 ; i--) {
    output = output + i;
    
  }
  return  output;
}

console.log(sumUntil(5));