const jwt = require('jsonwebtoken')

// Middleware function takes in req, res, next
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token')

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, process.env.jwtSecret)
    req.user = decoded.user
    next()
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' })
  }
}
