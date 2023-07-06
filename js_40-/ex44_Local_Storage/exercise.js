const user = {
  id: 1,
  name: "John",
  age: 25,
};

function getLocale(){
  const x = localStorage.getItem("user")
  console.log(JSON.parse(x));
}
getLocale()