const authenticate = (req, res, next) => {
    // Check if user is authenticated
    if(!req.user) {
      return res.status(401).send({ message: 'Unauthenticated' });
    }
    next();
  };
  
  const authorize = (role) => {
    return (req, res, next) => {
      // Check if user has proper role
      if(req.user.role !== role) {
        return res.status(401).send({ message: 'Unauthorized' });
      }
      next();
    }
  };
  module.exports = { authenticate, authorize };
  