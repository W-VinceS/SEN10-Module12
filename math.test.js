const { add, subtract } = require("./math");

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5); // ✅ passing
});

test("subtracts numbers incorrectly (failing test)", () => {
  expect(subtract(5, 3)).toBe(1); // ❌ fails, should be 2
});
