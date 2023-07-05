
export async function extraction(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    let body = document.getElementById("container")
    let todo_list = document.createElement("div")
    todo_list.classList.add = ".todo-list"
    body.appendChild(todo_list)
    data.forEach(element => {
        let li = document.createElement("li");
        todo_list.append(li)
        li.append(`${element.title}`)
    });
    }
