const app = require("../src/app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("Testes", async () => {
  it("Testando endpoint /", async (done) => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Servidor funcionado!");
    done();
  });

  test("teste", () => {
    expect(true).toEqual(true);
  });
});
