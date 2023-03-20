import {
    describe,
    expect,
    test,
    beforeEach,
    afterEach,
    jest,
  } from "@jest/globals";

  import wordCheck from "./WordCheck.js";

  describe("wordCheck()", ()=> {

    test("Should return incorrect for the first letter", ()=> {
        const result = wordCheck("word", "sword");
        expect(result[0]).toBe("incorrect");
    });

  });