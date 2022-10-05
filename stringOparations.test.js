const Operation = require('./stringOperation.js');

describe('stringCounter', () => {
    it('should return the length of the string', () => {
        expect(Operation.stringCounter('test')).toBe(4);
    });

    it('should return fail if the string is empty', () => {
        if (Operation.stringCounter('') === 0) {
            throw new Error('fail');
        }
    });

    it('should return fail if the string is longer than 10 chars', () => {
        if (Operation.stringCounter('testtesttest') > 10) {
            throw new Error('fail');
        }
    });

    it ('should return fail if variable is a number', () => {
        if (typeof Operation.stringCounter(123) === Number) {
            throw new Error('fail');
        }
    });

    

});

describe('stringReverse', () => {
    it('should return the reversed string', () => {
        expect(Operation.stringReverse('test')).toBe('tset');
    });

    it('should return fail if the string is empty', () => {
        if (Operation.stringReverse('') === 0) {
            throw new Error('fail');
        }
    });

    it('should return fail if the string is longer than 10 chars', () => {
        if (Operation.stringReverse('testtesttest') > 10) {
            throw new Error('fail');
        }
    });

    it ('should return fail if the string is not a string', () => {
        if (Operation.stringReverse(123) === Number) {
            throw new Error('fail');
        }
    });
});

describe('stringCapitalize', () => {
    it('should return the capitalized string', () => {
        expect(Operation.stringCapitalize('test')).toBe('Test');
    });

    it('should return fail if the string is empty', () => {
        if (Operation.stringCapitalize('') === 0) {
            throw new Error('fail');
        }
    });

    it('should return fail if the string is longer than 10 chars', () => {
        if (Operation.stringCapitalize('testtesttest') > 10) {
            throw new Error('fail');
        }
    });

    it ('should return fail if variable is undefined or null', () => {
        if (typeof Operation.stringCapitalize('') === undefined || null) {
            throw new Error('fail');
        }
    });  

    it ('should return fail if variable is a number', () => {
        if (typeof Operation.stringCapitalize(123) === Number) {
            throw new Error('fail');
        }
    });
});

