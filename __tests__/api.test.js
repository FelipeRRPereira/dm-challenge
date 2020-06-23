const app = require("../src/app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("Testes", () => {
  jest.setTimeout(60000);
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

  test("Deve retornar erro de no mínimo um ingrediente", async (done) => {
    const res = await request.get("/recipes?i=");
    expect(res.status).toBe(404);
    expect(res.body.message).toBe(
      "Deve ser informado pelo menos um ingrediente!"
    );
    done();
  });

  test("Deve retornar um array de receitas", async (done) => {
    const res = await request.get("/recipes?i=onion,tomato,cress");
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ recipes: expect.anything() });
    expect(res.body.recipes[0]).toMatchObject({
      title: expect.anything(),
      ingredients: expect.anything(),
      link: expect.anything(),
      gif: expect.anything(),
    });
    done();
  });

  test("Deve retornar mensagem quando nenhuma receita for encontrada", async (done) => {
    const ingredients = "iii, iii";
    const res = await request.get(`/recipes?i=${ingredients}`);
    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `Nenhuma receita encontrada para os ingredientes ${ingredients}.`
    );
    done();
  });

  test("Deve retornar um array de ingredientes ordenado", async (done) => {
    const ingredients = "sugar,onion,tomato";
    const res = await request.get(`/recipes?i=${ingredients}`);
    expect(res.status).toBe(200);
    const ingredientsArray = ["sugar", "tomato", "cinnamon"].sort();
    expect(res.body.recipes[0].ingredients).toEqual(ingredientsArray);
    done();
  });
});
