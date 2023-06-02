function printName(){
    let helloName = "Hello John"
    return helloName;
}
function inner(ind) {
    console.log(ind);
}
inner(printName());