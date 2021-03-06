import { Response, Request } from "express";
import createUser from "./services/CreateUser";

// string, number, boolean, object, Arry
// interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "raul_sigoli@hotmail.com",
    password: "123456",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  return response.json({ message: "Hello World" });
}
