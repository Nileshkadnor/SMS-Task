
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { requireAdmin } = require('../middleware/authMiddleware');


router.post('/', requireAdmin, clientController.createClient);

module.exports = router;
