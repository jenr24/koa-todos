const { request } = require('supertest');
const { app } = require('../src/server');

test('Hello world works', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
})