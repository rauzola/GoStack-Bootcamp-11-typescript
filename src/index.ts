import express from "express";

import { helloWorld } from "./routes";

const porta = 3333;
const app = express();

app.get("/", helloWorld);

app.listen(`${porta}`, () => {
  console.log(`Servidor iniciado na porta = ${porta}`);
});
