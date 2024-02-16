

const validateEmail = (req, res, next) => {
    const { email } = req.user; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    next();
};

module.exports = { validateEmail };
