import express, { request } from "express";

const porta = 3333;
const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(`${porta}`, () => {
  console.log(`Servidor iniciado na porta = ${porta}`);
});
