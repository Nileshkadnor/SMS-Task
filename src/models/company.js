

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  

 
  relatedCompany: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },

  
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Company', companySchema);
