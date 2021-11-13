// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2

/*Phone Number Unit tests*/ 
test('Testing first valid phone number (951)-454-4726.', () => {
    expect(functions.isPhoneNumber('(951)-454-4726')).toBe(true);
});

test('Testing second valid phone number 951-207-0247.', () => {
    expect(functions.isPhoneNumber('951-207-0247')).toBe(true);
});

test('Testing first invalid phone number (951)-207-024.', () => {
    expect(functions.isPhoneNumber('(951)-207-024')).toBe(false);
});

test('Testing first invalid phone number 95120702.', () => {
    expect(functions.isPhoneNumber('95120702')).toBe(false);
});

/*Email Unit tests*/
test('Testing first valid email amoghe@ucsd.edu.', () => {
    expect(functions.isEmail('amoghe@ucsd.edu')).toBe(true);
   });

test('Testing second valid email bob@gmail.com.', () => {
    expect(functions.isEmail('bob@gmail.com')).toBe(true);
   });

test('Testing first invalid email amoghe@ucsd.', () => {
    expect(functions.isEmail('amoghe@ucsd')).toBe(false);
   });

test('Testing second invalid email abcdedf.', () => {
    expect(functions.isEmail('abcdef')).toBe(false);
   });

/*Strong Password Unit tests*/
test('Testing first valid strong password UCSD123', () => {
    expect(functions.isStrongPassword('UCSD123')).toBe(true);
});

test('Testing second valid strong password A1B2_C3D4', () => {
    expect(functions.isStrongPassword('A1B2_C3D4')).toBe(true);
});

test('Testing first invalid strong password ?????', () => {
    expect(functions.isStrongPassword('?????')).toBe(false);
});

test('Testing second invalid strong password !11!11!11', () => {
    expect(functions.isStrongPassword('!11!11!11')).toBe(false);
});

/*Date Unit tests*/
test('Testing first valid date 1/24/2002', () => {
    expect(functions.isDate('1/24/2002')).toBe(true);
});

test('Testing second valid date 12/12/2021', () => {
    expect(functions.isDate('12/12/2021')).toBe(true);
});

test('Testing first invalid date 1/24/20', () => {
    expect(functions.isDate('1/24/20')).toBe(false);
});

test('Testing second invalid date 100/240/200', () => {
    expect(functions.isDate('100/240/200')).toBe(false);
});

/*Hex Color Unit tests*/
test('Testing first valid hex color #1F0A22', () => {
    expect(functions.isHexColor('#1F0A22')).toBe(true);
});

test('Testing second valid hex color #FFF', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('Testing first invalid hex color 0X5b', () => {
    expect(functions.isHexColor('0X5b')).toBe(false);
});

test('Testing second invalid hex color HIJKL', () => {
    expect(functions.isHexColor('HIJKL')).toBe(false);
});