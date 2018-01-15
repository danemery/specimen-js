const chai = require('chai');
const assert = chai.assert;
const Specimen = require('../src/specimen.js');

const specimen = new Specimen();

describe('Specimen', () => {
    describe('string type check', () => {
        it('correctly identifies strings', () => {
            assert.isTrue(specimen.isString(''));
            assert.isTrue(specimen.isString(new String()));

            assert.isFalse(specimen.isString(12345));
            assert.isFalse(specimen.isString(true));
            assert.isFalse(specimen.isString([]));
            assert.isFalse(specimen.isString({}));
            assert.isFalse(specimen.isString(function(){}));
            assert.isFalse(specimen.isString(new RegExp()));
            assert.isFalse(specimen.isString(new Date()));
            assert.isFalse(specimen.isString(undefined));
            assert.isFalse(specimen.isString(null));
        });
    });

    describe('number type check', () => {
        it('correctly identifies numbers', () => {
            assert.isTrue(specimen.isNumber(-12345));
            assert.isTrue(specimen.isNumber(12345));

            assert.isFalse(specimen.isNumber(NaN));
            assert.isFalse(specimen.isNumber(''));
            assert.isFalse(specimen.isNumber(true));
            assert.isFalse(specimen.isNumber([]));
            assert.isFalse(specimen.isNumber({}));
            assert.isFalse(specimen.isNumber(function(){}));
            assert.isFalse(specimen.isNumber(new RegExp()));
            assert.isFalse(specimen.isNumber(new Date()));
            assert.isFalse(specimen.isNumber(undefined));
            assert.isFalse(specimen.isNumber(null));
        });
    });

    describe('boolean type check', () => {
        it('correctly identifies booleans', () => {
            assert.isTrue(specimen.isBoolean(true));
            assert.isTrue(specimen.isBoolean(false));

            assert.isFalse(specimen.isBoolean(''));
            assert.isFalse(specimen.isBoolean(12345));
            assert.isFalse(specimen.isBoolean([]));
            assert.isFalse(specimen.isBoolean({}));
            assert.isFalse(specimen.isBoolean(function(){}));
            assert.isFalse(specimen.isBoolean(new RegExp()));
            assert.isFalse(specimen.isBoolean(new Date()));
            assert.isFalse(specimen.isBoolean(undefined));
            assert.isFalse(specimen.isBoolean(null));
        });
    });

    describe('array type check', () => {
        it('correctly identifies arrays', () => {
            assert.isTrue(specimen.isArray([]));
            assert.isTrue(specimen.isArray(new Array()));

            assert.isFalse(specimen.isArray(''));
            assert.isFalse(specimen.isArray(12345));
            assert.isFalse(specimen.isArray(true));
            assert.isFalse(specimen.isArray({}));
            assert.isFalse(specimen.isArray(function(){}));
            assert.isFalse(specimen.isArray(new RegExp()));
            assert.isFalse(specimen.isArray(new Date()));
            assert.isFalse(specimen.isArray(undefined));
            assert.isFalse(specimen.isArray(null));
        });
    });

    describe('object type check', () => {
        it('correctly identifies objects', () => {
            assert.isTrue(specimen.isObject({}));
            assert.isTrue(specimen.isObject(new Object()));

            assert.isFalse(specimen.isObject(''));
            assert.isFalse(specimen.isObject(12345));
            assert.isFalse(specimen.isObject(true));
            assert.isFalse(specimen.isObject([]));
            assert.isFalse(specimen.isObject(function(){}));
            assert.isFalse(specimen.isObject(new RegExp()));
            assert.isFalse(specimen.isObject(new Date()));
            assert.isFalse(specimen.isObject(undefined));
            assert.isFalse(specimen.isObject(null));
        });
    });

    describe('function type check', () => {
        it('correctly identifies functions', () => {
            assert.isTrue(specimen.isFunction(function(){}));

            assert.isFalse(specimen.isFunction(''));
            assert.isFalse(specimen.isFunction(12345));
            assert.isFalse(specimen.isFunction(true));
            assert.isFalse(specimen.isFunction({}));
            assert.isFalse(specimen.isFunction(new RegExp()));
            assert.isFalse(specimen.isFunction(new Date()));
            assert.isFalse(specimen.isFunction(undefined));
            assert.isFalse(specimen.isFunction(null));
        });
    });

    describe('regexp type check', () => {
        it('correctly identifies regexps', () => {
            assert.isTrue(specimen.isRegExp(/(?:)/));
            assert.isTrue(specimen.isRegExp(new RegExp()));

            assert.isFalse(specimen.isRegExp(''));
            assert.isFalse(specimen.isRegExp(12345));
            assert.isFalse(specimen.isRegExp(true));
            assert.isFalse(specimen.isRegExp({}));
            assert.isFalse(specimen.isRegExp(function(){}));
            assert.isFalse(specimen.isRegExp(new Date()));
            assert.isFalse(specimen.isRegExp(undefined));
            assert.isFalse(specimen.isRegExp(null));
        });
    });

    describe('date type check', () => {
        it('correctly identifies dates', () => {
            assert.isTrue(specimen.isDate(new Date()));

            assert.isFalse(specimen.isDate(''));
            assert.isFalse(specimen.isDate(12345));
            assert.isFalse(specimen.isDate(true));
            assert.isFalse(specimen.isDate({}));
            assert.isFalse(specimen.isDate(function(){}));
            assert.isFalse(specimen.isDate(new RegExp()));
            assert.isFalse(specimen.isDate(undefined));
            assert.isFalse(specimen.isDate(null));
        });
    });

    describe('undefined type check', () => {
        it('correctly identifies undefined values', () => {
            assert.isTrue(specimen.isUndefined());
            assert.isTrue(specimen.isUndefined(undefined));

            assert.isFalse(specimen.isUndefined(''));
            assert.isFalse(specimen.isUndefined(12345));
            assert.isFalse(specimen.isUndefined(true));
            assert.isFalse(specimen.isUndefined({}));
            assert.isFalse(specimen.isUndefined(function(){}));
            assert.isFalse(specimen.isUndefined(new RegExp()));
            assert.isFalse(specimen.isUndefined(new Date()));
            assert.isFalse(specimen.isUndefined(null));
        });
    });

    describe('null type check', () => {
        it('correctly identifies null values', () => {
            assert.isTrue(specimen.isNull(null));

            assert.isFalse(specimen.isNull(''));
            assert.isFalse(specimen.isNull(12345));
            assert.isFalse(specimen.isNull(true));
            assert.isFalse(specimen.isNull({}));
            assert.isFalse(specimen.isNull(function(){}));
            assert.isFalse(specimen.isNull(new RegExp()));
            assert.isFalse(specimen.isNull(new Date()));
            assert.isFalse(specimen.isNull(undefined));
        });
    });
});