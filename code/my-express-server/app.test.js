import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from './app'; // Assuming app.js exports your Express app

describe('My First Server', () => {
    it('should return a welcome message on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('<h1>Welcome to My First Server!</h1>');
        expect(response.status).toBe(200);
    });

    it('should return about message on GET /about', async () => {
        const response = await request(app).get('/about');
        expect(response.text).toBe('I am learning to build servers with Express.');
        expect(response.status).toBe(200);
    });

    it('should greet the user on GET /greet/:userName', async () => {
        const response = await request(app).get('/greet/John');
        expect(response.text).toBe('Hello, John! Nice to meet you.');
        expect(response.status).toBe(200);

        const response2 = await request(app).get('/greet/Jane');
        expect(response2.text).toBe('Hello, Jane! Nice to meet you.');
        expect(response2.status).toBe(200);
    });

    it('should handle query strings on GET /favorite', async () => {
        // const response = await request(app).get('/favorite?fave=reading');
        // expect(response.text).toBe('My favorite thing is reading.');
        // expect(response.status).toBe(200);

        const response2 = await request(app).get('/favorite');
        expect(response2.text).toBe('You did not provide any favorite things!');
        expect(response2.status).toBe(200);
    });

    it('should handle multiple query strings on GET /favorite', async () => {
        const response = await request(app).get('/favorite?food=pizza&drink=coffee');
        expect(response.text).toBe('My favorite food is pizza. My favorite drink is coffee.');
        expect(response.status).toBe(200);
    });
});
