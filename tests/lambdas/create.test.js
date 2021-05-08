const { beforeAll } = require("@jest/globals");
const create = require("../../create");
const init = require("./init");

describe("Create todo integration test", () => {
  beforeAll(() => {
    init();
  });

  test("It should take a todo object and return a lambda response", async () => {
    const event = {
      title: "My test todo",
      task: "Creating a todo for E2E test",
    };

    const res = await create.handler(event);

    expect(res).toBeDefined();
    expect(res.statusCode).toBe(201);
  });

  test("without a todo object lambda throws an error", async () => {
    const res = await create.handler();

    expect(res).toBeDefined();
    expect(res.statusCode).toBe(500);
  });

  test("without a title in the object lambda throws an error", async () => {
    const event = {
      task: "Creating a todo for E2E test",
    };

    const res = await create.handler(event);

    expect(res.statusCode).toBe(500);
    expect(res.body).toBe("Payload values missing");
  });

  test("without a task in the object lambda throws an error", async () => {
    const event = {
        title: "My test todo",
    };

    const res = await create.handler(event);

    expect(res.statusCode).toBe(500);
    expect(res.body).toBe("Payload values missing");
  });
});
