import * as allowMethods from "allow-methods";
import { Request, Response, Router } from "express";

export function getRoot(_req: Request, res: Response) {
  res.send("Hello Typescript from Deta!");
}

export function handleRoot() {
  const router = Router();
  router.all(allowMethods(["get"]));

  router.get("", getRoot);
  return router;
}
