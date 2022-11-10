import { describe, expect, test } from "@jest/globals";
import { getMockReq, getMockRes } from "@jest-mock/express";
import { getRoot, handleRoot } from "../../src/routes/root";

describe("Root", () => {
    
  test("Can handle root", () => {
    const router = handleRoot();
    expect(router).not.toBeFalsy();
  });

  test("Can handle get", () => {
    const req = getMockReq();
    const { res } = getMockRes();
    getRoot(req, res);
    expect(res.send).toBeCalledWith("Hello Typescript from Deta!");
  });
});
