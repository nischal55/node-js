const http = require("http");
const auth = require("./auth");
//create a server object:
http
  .createServer(function (req, res) {
    if (req.url == "/login" && req.method == "GET") {
      res.write("hello");
      auth.signup("Nischal", "abc@gmail.com", "9840151590");
      auth.login("Nischal", "9840151590");
      res.write();
    }
    res.end();
  })
  .listen(8080);
