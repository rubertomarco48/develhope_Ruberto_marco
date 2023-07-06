
export async function extraction(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    let body = document.getElementById("container")
    let todo_title = document.createElement("h2")
    todo_title.append(`${data.title}`)
    body.append(todo_title)
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.checked = data.completed
    console.log(checkbox.checked);
    body.append(checkbox)
    }
