const http = require("http");
const auth = require("./auth");
//create a server object:
http
  .createServer(function (req, res) {
    if (req.url == "/login" && req.method == "GET") {
      res.write(JSON.stringify([{ react: "completed" }]));
      res.end();
    } else if (req.url == "/login" && req.method == "POST") {
      res.write("create a code");
      res.end();
    }
  })
  .listen(8080);
