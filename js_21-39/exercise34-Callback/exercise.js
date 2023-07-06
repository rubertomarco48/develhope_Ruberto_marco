
/* function printAsyncName(callback,string) {
    let x = setInterval(callback,1000);
    let y = setInterval(()=>console.log(string),2000)
    setTimeout(()=>clearInterval(x),1000);
    setTimeout(()=>clearInterval(y),2000);

} */
function printAsyncName(callback, string) {
    setTimeout(() => {
      callback();
      setTimeout(() => {
        console.log(string);
      }, 2000);
    }, 1000);
  }

function hello() {
    console.log("Hello");
}
const nome = "Marco";
printAsyncName(hello,nome);