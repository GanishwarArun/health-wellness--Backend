require("dotenv").config();
const jwt = require("jsonwebtoken");

// Use correct environment variable
const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  console.error("JWT_SECRET is missing in .env file");
}

// Token generated
function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}

// Export
module.exports = { generateToken, SECRET_KEY };

// // import
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// //Secret key
// const SECRET_KEY = process.env.JWT_TOKEN;

// // Token generated
// function generateToken(payload) {
//     const token = jwt.sign(payload, SECRET_KEY, {
//         expiresIn: "1h"
//     });
//     return token;
// }

// // expire token
// module.exports = { generateToken, SECRET_KEY };
