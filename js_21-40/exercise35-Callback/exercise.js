function repeatHello(callback) {
    let x = setInterval(callback,1000);
    /* setTimeout(()=>clearInterval(x),1000); */
}
/* function Hello() {
    console.log("Hello");
} */
const Hello = ()=>console.log("Hello");
repeatHello(Hello);
/* guarda io lo fatta in entrambi i modi e va bene comunque ,
l'unica spiegazione che posso dare è che occupa solo una riga
quindi è codice più compatto */