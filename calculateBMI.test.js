const cBMI = require('./calculateBMI.js');

test('correctly calculates the BMI of the user based on their input', () => {
    expect(cBMI(5, 2, 145)).toBeGreaterThan(0);
});