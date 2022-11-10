import { describe, expect, test } from "@jest/globals";
import { getMockRes } from "@jest-mock/express";
import { sendProblem } from "../src/util";

describe("Util", () => {
  test("Can send problem", () => {
    const { res } = getMockRes();
    const problem = { status: 400, title: "hello world" };
    sendProblem(res, problem);
    expect(res.status).toBeCalledWith(400);
    expect(res.contentType).toBeCalledWith("application/problem+json");
    expect(res.send).toBeCalledWith(problem);
  });
});
