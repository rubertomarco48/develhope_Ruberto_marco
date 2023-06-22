function repeatHello(callback) {
    let x = setInterval(callback,1000);
    setTimeout(()=>clearInterval(x),5000);
}
/* function Hello() {
    console.log("Hello");
} */
const Hello = ()=>console.log("Hello");
repeatHello(Hello);
