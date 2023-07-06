const { SpellCheck: SpellCheckBase } = require('@nlpjs/similarity');

class SpellCheck extends SpellCheckBase {
    constructor(settings = {}) {
        super(settings.features ? settings : { features: settings });
    }
}

module.exports = {
    SpellCheck,
};
