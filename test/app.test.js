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