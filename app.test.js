// Run with: node --test   (no npm install needed)
const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("./app.js");

test("greets the college by name", () => {
  assert.match(greet("SR University"), /^Hello SR University!/);
});

test("mentions the pipeline", () => {
  assert.match(greet("SR University"), /CI\/CD pipeline/);
});

test("handles an empty name safely", () => {
  assert.strictEqual(greet("  "), "");
});
