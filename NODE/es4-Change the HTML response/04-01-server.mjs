/* Il nostro server HTTP invia un corpo di risposta HTML.

Sostituisci il testo nell'HTML con il tuo messaggio. Esegui il server e utilizza il browser web per testare le modifiche. */

import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end(
    `<html>
      <head></head>
      <body>
        <div>
          <img src="https://blog.develhope.co/content/images/2023/03/develhope-blu-11-1.png" width="100px" alt="">
          <ul style="display:flex;gap:2rem;list-style:none">
                <li ><a style="text-decoration:none;color:blue" href="">HOME</a></li>
                <li ><a style="text-decoration:none;color:blue" href="">PRODOTTI</a></li>
                <li ><a style="text-decoration:none;color:blue" href="">CHI SIAMO</a></li>
            </ul>
        </div>
        <div>
        <h1>MARCO RUBERTO</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Eum neque, iste ratione suscipit atque laboriosam deserunt et.
          Incidunt esse, aspernatur, vero eveniet iusto quo,
           praesentium nihil harum molestias veritatis corporis!
        </p>
        </div>
    </body>
</html>`
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
