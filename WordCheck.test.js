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

    test("Should return object with key 'W' and value 'incorrect' for the first letter", ()=> {
        const result = wordCheck("words", "lords");
        expect(result[0]).toMatchObject({"W": "incorrect"});
    });

    test("Should return object with key 'D' and value 'correct' for the last letter", ()=> {
        const result = wordCheck("words", "lords");
        expect(result[4]).toMatchObject({"S": "correct"});
    });

    test("Should return object with key 'G' and value 'misplaced' for the first letter", ()=> {
      const result = wordCheck("great", "signs");
      expect(result[0]).toMatchObject({"G": "misplaced"});
  });

  });