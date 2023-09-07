import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

/* curl localhost:3000/ -v
*   Trying 127.0.0.1:3000...
* Connected to localhost (127.0.0.1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.88.1
Ho dovuto togliere una riga altrimenti non me la commentava 
< HTTP/1.1 200 OK
< Content-Type: application/json
< Date: Thu, 07 Sep 2023 11:28:36 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Content-Length: 19
<
{"location":"Mars"}* Connection #0 to host localhost left intact */