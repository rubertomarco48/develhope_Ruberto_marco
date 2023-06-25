const isLogged = true;
/* firstPromise  */
/* dichiaro una costante che viene inizializzata da una funzione che ritorna una promessa  */
/* la promessa viene ritardata di un secondo */
/* se isLogged è true allora mi restituisci un valore random altrimenti restituisci un errore */
const check = (isLogged) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isLogged) {
          const rand = Math.random();
          console.log(rand);
          resolve(rand);
        } else {
          reject(new Error("Utente non loggato"));
        }
      }, 1000);
    });
  };
  
  // Seconda promise
/* dichiaro una costante che viene inizializzata da una funzione che ritorna una promessa  */
/* la promessa viene ritardata di un secondo */
/* se il valore è superiore a 0.5 allora stampi qualcosa altrimenti restituisci un errore */
  const obj = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number > 0.5) {
          resolve({ nome: "John", età: 24 });
        } else {
          reject(new Error("Numero minore o uguale a 0.5"));
        }
      }, 1000);
    });
  };
  
  // Concatenazione delle promise
  check(true) 
/*  poi prendi il risultato del promise check ed inseriscila nella seconda promise */
    .then((rand) => obj(rand))
/* poi prendi il risultato della seconda promise e stampalo su schermo */
    .then((result) => {
      console.log(result); // { nome: "John", età: 24 }
    })
/*   se ci sono errori prendili e stampali su schermo */
    .catch((error) => {
      console.log(error); // Gestisci gli errori
    })
    .finally(()=> console.log("finito"))
