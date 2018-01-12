class Specimen {
    constructor() {}

    isString(value) {
        if (value && typeof value === 'object') {
            return value.constructor === String;
        }
        return typeof value === 'string';
    };
    isNumber(value) {
        return typeof value === 'number' && isFinite(value);
    };
    isBoolean(value) {
        return typeof value === 'boolean';
    };
    isArray(value) {
        return typeof value === 'object' && value !== null && value && value.constructor === Array;
    };
    isObject(value) {
        return typeof value === 'object' && value !== null && value && value.constructor === Object;
    };
    isFunction(value) {
        return typeof value === 'function';
    };
    isRegExp(value) {
        return typeof value === 'object' && value !== null && value && value.constructor === RegExp;
    };
    isDate(value) {
        return value instanceof Date;
    };
    isUndefined(value) {
        return typeof value === 'undefined';
    };
    isNull(value) {
        return value === null;
    }
};

module.exports = new Specimen();