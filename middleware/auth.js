
const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  //get the token from the header if present
  console.log(req.headers)
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    console.log(process.env.SECRET);
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    console.log({decoded})
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};
