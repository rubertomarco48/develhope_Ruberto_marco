import figlet from "figlet";

figlet.text(
    "DEVELHOPE",
    {
      font: "Block",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 120,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
  