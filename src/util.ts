import { Response } from "express";

export interface Problem extends Record<string, any> {
  status: number;
  title: string;
}

export function sendProblem(
  res: Response<any, Record<string, any>>,
  problem: Problem
) {
  const { status } = problem;
  console.warn(`Sending problem: ${JSON.stringify(problem)}`);
  res.status(status).contentType("application/problem+json").send(problem);
}
