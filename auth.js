const bcrypt = require("bcrypt");

function signup(username, email, password) {
  bcrypt.hash(password, 10, function (err, hash) {
    let data = {
      username: username,
      email,
      password: hash,
    };
    console.log(data);
  });
}

function login(username, password) {
  let hash = "$2b$10$98nxuec83P05gSy/oRA6zu64b/Sto92fwdeldqAhX6wEt/F00VzKm";
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
