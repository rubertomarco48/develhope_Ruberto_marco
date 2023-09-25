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

async function Gioco() {
  players.forEach(async (element) => {
    try {
      const res = await luckyDraw(element);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  });
}
Gioco();
