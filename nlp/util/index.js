const { removeEmojis } = require('@nlpjs/emoji');
const { Evaluator } = require('@nlpjs/evaluator');
const { SpellCheck } = require('./spell-check');
const { Handlebars } = require('./handlebars');

module.exports = {
    removeEmojis,
    Evaluator,
    SpellCheck,
    Handlebars,
};
