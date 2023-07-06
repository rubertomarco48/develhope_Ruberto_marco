const user = {
  id: 1,
  name: "John",
  age: 25,
};
function saveLocal(obj) {
  localStorage.setItem('user', JSON.stringify(obj));
}
saveLocal(user)
   