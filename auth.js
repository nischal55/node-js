const bcrypt = require("bcrypt");

function signup(username, email, password) {
  bcrypt.hash(password, 10, function (err, hash) {
    let data = {
      username: username,
      email,
      password: hash,
    };
  });
}

function login(username, password) {
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      console.log("login success");
    } else {
      console.log("login Failed");
    }
  });
}

module.exports = {
  signup: signup,
  login: login,
};
