const http = require("http");

http
  .createServer((req, res) => {
    // res.setHeader("Content-Disposition", "attachment; filename=list.csv");
    // res.writeHead(200, { "Content-Plain": "application/csv" });
    // const person = {
    //   id: 1,
    //   name: "edwin",
    // };

    res.write("Hello word");
    res.end();
  })
  .listen(8080);

console.log("server in port 8080");
