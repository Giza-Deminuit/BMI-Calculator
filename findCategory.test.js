const fCat = require('./findCategory.js');

// Using 1x1

test('Testing lower boundary of "Normal weight". ON point.', () => {
    expect(fCat(18.5)).toBe("Normal weight");
});

test('Testing lower boundary of "Normal weight". OFF point.', () => {
    expect(fCat(18.4)).toBe("Underweight");
});

test('Testing "Normal weight". Interior point.', () => {
    expect(fCat(21.7)).toBe("Normal weight");
});

test('Testing upper boundary of "Normal weight". ON point.', () => {
    expect(fCat(24.9)).toBe("Normal weight");
});

test('Testing upper boundary of "Normal weight". OFF point.', () => {
    expect(fCat(25)).toBe("Overweight");
});

// **********************************************

test('Testing "Overweight". Interior point.', () => {
    expect(fCat(27.45)).toBe("Overweight");
});

test('Testing upper boundary of "Overweight". ON point.', () => {
    expect(fCat(29.9)).toBe("Overweight");
});

test('Testing upper boundary of "Overweight". OFF point.', () => {
    expect(fCat(30)).toBe("Obese");
});

// **********************************************

// Misc. Tests
test('No input should be invalid', () => {
    expect(fCat()).toBe("Invalid");
});

test('Non-numeric input should be invalid', () => {
    expect(fCat("Hello")).toBe("Invalid");
});