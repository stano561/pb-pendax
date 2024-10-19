const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (token == null) return res.sendStatus(401); // No token present

  // jwt.verify(token, SECRET_KEY, (err, user) => {
  jwt.verify(token, API_KEY_TEST, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token

    req.user = user;
    next(); // if all shit happens is good
  });
};

export { authenticateToken };
