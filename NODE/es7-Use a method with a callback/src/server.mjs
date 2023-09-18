
import fs from "node:fs"

  fs.writeFile("message.txt","Hello Develhope",(err)=>err && console.error(err))

  console.log("File Create/overWrite");