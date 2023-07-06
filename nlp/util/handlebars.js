const { compile } = require('@nlpjs/evaluator');

class Handlebars {
    static compile(str) {
        return compile(str);
    }
}

module.exports = {
    Handlebars,
};
