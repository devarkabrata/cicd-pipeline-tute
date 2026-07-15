import request from 'supertest';
import { app } from '../app.js';

describe('GET /greet', () => {
  it('should return 200 and a success message', async () => {
    const response = await request(app).get('/greet');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.msg).toBe('Hello welcome here bro yaarrrr');
  });
});

describe('GET /db-check', () => {
  it('should return 200 and a timestamp from the database', async () => {
    const response = await request(app).get('/db-check');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.time).toBeDefined();
  });
});