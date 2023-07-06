const form = document.querySelector("form");
  const title = document.querySelector("#todo-title");
  const check = document.querySelector("#todo-completed");
  const url = "https://jsonplaceholder.typicode.com/posts";
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const datiPost = {
      title: title.value,
      completed: check.checked
    }

    try {
      const risposta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datiPost),
      });
      const response = await risposta.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  });

  /* non lo spiega il post nelle lezioni e da internet non lo sto capendo */