
async function inviaNuovoPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const datiPost = {
    titolo: "Titolo del post",
    completato: true,
  };

  try {
    const risposta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datiPost),
    });

    const datiRisposta = await risposta.json();
    console.log("Risposta dal server:", datiRisposta);
  } catch (errore) {
    console.error("Si è verificato un errore:", errore);
  }
}
/* non lo spiega il post nelle lezioni e da internet non lo sto capendo */
inviaNuovoPost();
