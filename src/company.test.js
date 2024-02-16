const request = require('supertest');
const app = require('../app'); 
const Company = require('../models/company');

describe('Company Tests', () => {
  test('There is only 1 company with more than 200000 employees', async () => {
    const companies = await Company.find({ employees: { $gt: 200000 } });
    expect(companies.length).toBe(1);
  });

  
});
