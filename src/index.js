const app = require("./app");
const { port, host } = app.get("config");

app.listen(port, host, () => {
  console.log(`Servidor rodando na seguinte URL: http://${host}:${port}`);
});
