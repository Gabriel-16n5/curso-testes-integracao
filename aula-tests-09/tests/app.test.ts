import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
   const {status} = await api.post("/users").send({
    email: "sapo@sapo.com",
    password: "sapo"
   })
    expect(status).toBe(201)
  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    const {status} = await api.post("/users").send({
      email: "sapo@sapo.com",
      password: "sapo"
     })
      expect(status).toBe(201);
      const {statusCode} = await api.post("/users").send({
        email: "sapo@sapo.com",
        password: "sapo"
       })
        expect(statusCode).toBe(409);
  });
  
});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const {status} = await api.post("/users").send({
      email: "sapo@sapo.com",
      password: "sapo"
     })
      expect(status).toBe(201)
    const {body} = await api.get("/users");
    expect(body).toHaveLength(1)
  });

  it("should return 404 when can't find a user by id", async () => {
    const {status} = await api.get("/users/9999");
    expect(status).toBe(404)
  });

  it("should return all users", async () => {
    await api.post("/users").send({email: "sapo@sapo.com", password: "sapo"})
    await api.post("/users").send({email: "sapa@sapa.com", password: "sapato"})
    await api.post("/users").send({email: "pipoca@pipoca.com", password: "pipoca"})
    const {body} = await api.get("/users");
    expect(body).toHaveLength(3)
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: expect.any(String),
          
        })
      ])
    )
  });
  
})