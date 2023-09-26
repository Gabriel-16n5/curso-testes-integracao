import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
  it("verifica o tamanho do array se está de acordo com o que foi pedido e se é fibonacci", async () => {
    const {body, status} = await api.get("/fibonacci?elements=20");
    expect(status).toBe(200);
    expect(body).toHaveLength(20);
    expect(isFibonacciNumber(body[body.length-1])).toBe(true);
  })
})

function isFibonacciNumber(num:number) {
  let a = 0;
  let b = 1;

  while (a < num) {
    const temp = a;
    a = b;
    b = temp + b;
  }

  return a === num;
}