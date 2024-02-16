const Client = require('../models/client');


exports.createClient = async (req, res) => {
  try {
    
    const existingClient = await Client.findOne({ company: req.body.company });
    if (existingClient) {
      return res.status(400).json({ error: 'Company already used by another client' });
    }
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateClientFields = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedClient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
