
function inner() {
    function printName(){
        let helloName = "Hello John"
        return helloName;
    }
    return printName();
    
}

/* setTimeout(console.log(inner()),1000); */
timer = setTimeout(() => { console.log(inner()); }, 1000);
 

