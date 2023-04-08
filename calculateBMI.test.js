const cBMI = require("./calculateBMI.js");

test("The result of the calculation should be a positive value", () => {
  expect(cBMI(0.1, 0.1, 0.1)).toBeGreaterThan(0);
});

test("The function should follow the BMI formula correctly", () => {
  expect(cBMI(5, 3, 125)).toBeCloseTo(22.68, 2);
});
