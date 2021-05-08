const { beforeAll } = require("@jest/globals");
const read = require("../../read");
const init = require("./init");

describe("Create todo integration test", () => {
  beforeAll(() => {
    init();
  });

  test("It should take a todo object without id and return multiple items", async () => {
    const event = {
      id: "",
    };

    const res = await read.handler(event);

    expect(res.body.Items).toBeDefined();
    expect(res.statusCode).toBe(200);
  });

  test("It should take a todo object with id and return a single Item", async () => {
    const event = {
      id: "b7d7e619-06c5-4cdb-8afb-c488f54e0689",
    };

    const res = await read.handler(event);

    expect(res.body.Item).toBeDefined();
    expect(res.statusCode).toBe(200);
  });

  test("It should take a todo object with wrong id and return an empty body", async () => {
    const event = {
      id: "b7d7e6",
    };

    const res = await read.handler(event);

    expect(res.body).toEqual({});
    expect(res.statusCode).toBe(200);
  });

  test("with no event object lambda throws an error", async () => {

    const res = await read.handler();

    expect(res.statusCode).toBe(500);
  });
});
