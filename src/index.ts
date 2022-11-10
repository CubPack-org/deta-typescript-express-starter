import allowMethods from "allow-methods";
import { json } from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";

import { handleRoot } from "./routes/root";
import { sendProblem } from "./util";

const app = express();

// initial configuration
app.use(json());
app.use(multer().none());
app.use(morgan("tiny"));
app.use(allowMethods(["options", "get", "post"]));

// secure express
const corsDomains = (process.env.CORS_DOMAINS || "").split(",");
console.log(`Using CORS domains: ${JSON.stringify(corsDomains)}`);
app.use(
  cors({
    origin: corsDomains,
    optionsSuccessStatus: 200,
  })
);
app.options("*", cors());
app.use(helmet({ crossOriginResourcePolicy: false }));

// Get / endpoint
app.use(handleRoot());

// Handle errors
app.use((err: any, _req: Request, res: Response, _next: any) => {
  const problem = {
    status: err.status || 500,
    title: err.message,
  };
  sendProblem(res, problem);
});

// return 404 if no route defined at path
app.all("*", (_req, res) => {
  sendProblem(res, {
    status: 404,
    title: "Resource Not Found",
  });
});

module.exports = app;
