const app = require("../src/app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("Testes", async () => {
  test("Testando endpoint /", async (done) => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Servidor funcionado!");
    done();
  });

  test("Deve retornar um array com 3 ingredientes", async (done) => {
    const res = await request.get("/recipes?i=onion,tomato,cress,salt");
    expect(res.status).toBe(200);
    expect(res.body.keywords).toHaveLength(3);
    done();
  });

  test("Deve retornar um erro", async (done) => {
    const res = await request.get("/recipes?i=");
    expect(res.status).toBe(404);
    expect(res.body.erro).toBe("Deve retornar pelo menos um ingrediente!");
    done();
  });
});
