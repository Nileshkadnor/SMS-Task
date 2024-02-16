const request = require('supertest');
const app = require('../app'); 
describe('Client Tests', () => {
  test('A Client can be created properly', async () => {
    const response = await request(app)
      .post('/api/clients')
      .send({ Client data  });
    expect(response.status).toBe(201);
  });

  test('Assert that result contains Amazon and Google and not contains any other company from E-Commerce industry', async () => {
    const response = await request(app).get('/api/clients');
    expect(response.body).toContain('Amazon');
    expect(response.body).toContain('Google');
    
  });

  
});
