function sum(...rest) {
    let total = 0;
    for (const numero of rest) {
        total += numero;
      }
   /*  let[arg1,arg2,arg3,arg4,arg5] = rest; 
    return total= arg1 + arg2 + arg3 + arg4 + arg5 ; */
    return total;
}

console.log(sum(1, 2, 3, 4, 5));