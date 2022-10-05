

const Calculator = require('./mathOperations.js');

describe('add', () => {
    it('should return the sum of two numbers', () => {
        expect(Calculator.add(1, 2)).toBe(3);
    });
    it('should return fail if the sum is not a number', () => {
        if (Calculator.add('a', 'b') === NaN) {
            throw new Error('fail');
        }
    });

    it('should return fail if the sum is undefind', () => {
        if (Calculator.add() === undefined) {
            throw new Error('fail');
        }
    });
});

describe('subtract', () => {
    it('should return the subtraction of two numbers', () => {
        expect(Calculator.subtract(1, 2)).toBe(-1);
    });
    it('should return fail if the subtraction is not a number', () => {
        if (Calculator.subtract('a', 'b') === NaN) {
            throw new Error('fail');
        }
    });

    it('should return fail if the subtraction is undefind', () => {
        if (Calculator.subtract() === undefined) {
            throw new Error('fail');
        }
    });
});

describe('multiply', () => {
    it('should return the multiplication of two numbers', () => {
        expect(Calculator.multiply(1, 2)).toBe(2);
    });
    it('should return fail if the multiplication is not a number', () => {
        if (Calculator.multiply('a', 'b') === NaN) {
            throw new Error('fail');
        }
    });

    it('should return fail if the multiplication is undefind', () => {
        if (Calculator.multiply() === undefined) {
            throw new Error('fail');
        }
    });
});

describe('divide', () => {
    it('should return the division of two numbers', () => {
        expect(Calculator.divide(1, 2)).toBe(0.5);
    });
    it('should return fail if the division is not a number', () => {
        if (Calculator.divide('a', 'b') === NaN) {
            throw new Error('fail');
        }
    });

    it('should return fail if the division is undefind', () => {
        if (Calculator.divide() === undefined) {
            throw new Error('fail');
        }
    });

    it('should return fail if the division is infinity a / 0', () => {
        if (Calculator.divide(1, 0) === 0) {
            throw new Error('fail');
        }
    });   
});