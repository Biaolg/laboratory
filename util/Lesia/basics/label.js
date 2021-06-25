const lableStandard = require("../standard/lableStandard");
const conversion = require("../conversion/Web/conversionStructure")

module.exports = class {
    constructor(obj) {
        Object.keys(lableStandard).map((item) => {
            this[item] = obj[item];
        });
    }
    getMiddleware() {
        return JSON.stringify(this);
    }
    getHtml() {
        return conversion(this)
    }
};