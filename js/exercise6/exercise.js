
function inner() {
    function printName(){
        let helloName = "Hello John"
        return helloName;
    }
    return printName();
}
console.log(inner());
