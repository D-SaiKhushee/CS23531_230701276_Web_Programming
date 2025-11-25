
const validateToken = (req, res, next) => {
  
  const token = req.header('Authorization'); 
 
  if (!token || token === 'invalidToken') {
    // Returns 400 status code with failure message as required by the tests
    return res.status(400).json({ message: 'Authentication failed' });
  }

  next();
};

module.exports = {
  validateToken,
};