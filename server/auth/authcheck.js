import jwt from 'jsonwebtoken';

const token = (req, res, next) => {
  //get token from header
  const token = req.header('x-auth-token');

  //check if no token
  if (!token) {
    return res.status(401).json({ error: 'No token, authorisation denied' });
  }

  //verify token and get user details
  try {
    const decoded = jwt.verify(token, process.env.secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token is invalid' });
  }
};

export default token;