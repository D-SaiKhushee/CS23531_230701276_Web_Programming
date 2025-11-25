const User = require('../models/userModel');

const getUserByUsernameAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    
    const user = await User.findOne({ email, password }); 

    if (!user) {
      
      return res.status(200).json({ message: 'Invalid Credentials' });
    }
    
    
    return res.status(200).json(user); 

  } catch (error) {
    
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
   
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

const addUser = async (req, res) => {
  try {
    const userData = req.body;
    await User.create(userData);
   
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Database error' });
  }
};

module.exports = {
  getUserByUsernameAndPassword,
  getAllUsers,
  addUser,
};