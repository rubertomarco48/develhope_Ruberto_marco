const number = 15;
const myPromise = new Promise((resolve, reject) => {
  // Esegui un'operazione asincrona qui
  if (number > 10) {
    let result = "il numero va bene";
    /* operazione completata con successo */
    resolve(result); // restituisce il risultato
  } else {
    let error = "il  numero non va bene";
    reject(error); // restituisce l'errore
  }
});
myPromise
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err))
    

