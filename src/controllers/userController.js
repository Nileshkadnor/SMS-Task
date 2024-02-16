const User = require('../models/user');


exports.listUsers = async (req, res) => {
  try {
    const { username } = req.query;
    let users;
    if (username) {
      users = await User.find({ username });
    } else {
      users = await User.find();
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.replaceUserFields = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserProfile = async (req, res) => {
    try {
        
        const userProfile = await User.findById(req.user.id);
        res.json(userProfile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
