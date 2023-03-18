const fCat = require('./findCategory.js');

test('correctly calculates the BMI of the user based on their input', () => {
    expect(fCat(13)).toBe("Underweight");
});