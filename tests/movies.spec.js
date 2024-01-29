import { test } from '@jest/globals';
import request from 'supertest';
import { app } from '../src/app';

test("Min granne Totoro page shows title of movie", async () => {
    const response = await request(app)
    .get("/movie/4")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.text).toMatch("Min granne Totoro");
});

test("Encanto page shows title of movie", async () => {
    const response = await request(app)
    .get("/movie/2")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.text).toMatch("Encanto");
});

test("Pulp Fiction page shows title of movie", async () => {
    const response = await request(app)
    .get("/movie/8")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.text).toMatch("Pulp Fiction");
});

test("Forrest Gump page shows title of movie", async () => {
    const response = await request(app)
    .get("/movie/6")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.text).toMatch("Forrest Gump");
});

test("The Muppets page shows title of movie", async () => {
    const response = await request(app)
    .get("/movie/5")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.text).toMatch("The Muppets");
});

test("The Shawshank Redemption page shows title of movie", async () => {
    const response = await request(app)
    .get("/movie/3")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.text).toMatch("The Shawshank Redemption");
});

test("Isle of dogs page shows title of movie", async () => {
    const response = await request(app)
    .get("/movie/1")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

    expect(response.text).toMatch("Isle of dogs");
});