
/* import fs from "node:fs"

  fs.writeFile("message.txt","Hello Develhope",(err)=>err && console.error(err))

  console.log("File Create/overWrite"); */






/*   La funzione luckyDraw restituisce una promessa. 
  Crea una catena di promesse in cui la funzione è richiesta
   per ciascuno dei giocatori: Joe, Caroline e Sabrina */

  function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
 
  const players = ["Joe", "Caroline", "Sabrina"];
/* const promises = players.map(player => luckyDraw(player));

 Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === "fulfilled") {
        console.log(result.value); // Promessa risolta
      } else {
        console.error(result.reason.message); // Promessa rigettata
      }
    });
  })
  .catch(error => {
    console.error(error);
  });  */

/* questa sopra andava bene comunque? */

  luckyDraw(players[0])
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err.message))
    .then(()=>luckyDraw(players[1]))
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err.message))
    .then(()=>luckyDraw(players[2]))
    .then(res=>console.log(res))
    .catch(err=>console.log(err.message))