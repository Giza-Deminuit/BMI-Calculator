const cBMI = require('./calculateBMI.js');

test('The result of the calculation should be a positive value', () => {
    expect(cBMI(.1, .1, .1)).toBeGreaterThan(0);
});