const { containerBootstrap } = require('@nlpjs/core-loader');
const { LangAll } = require('@nlpjs/lang-all');
const { NluNeural } = require('@nlpjs/nlu');

class BrainNLU {
    constructor(settings = {}) {
        this.settings = settings;
        if (!this.settings.container) {
            this.settings.container = containerBootstrap();
        }
        this.container = this.settings.container;
        this.container.use(LangAll);
        if (!this.settings.l)
            this.nlu = new NluNeural({
                locale: this.settings.locale || this.settings.language || 'en',
            });
        this.corpus = [];
    }

    add(utterance, intent) {
        if (typeof utterance !== 'string') {
            throw new Error('Utterance must be an string');
        }
        if (typeof intent !== 'string') {
            throw new Error('Intent must be an string');
        }
        this.corpus.push({ utterance, intent });
    }

    train() {
        return this.nlu.train(this.corpus, this.settings);
    }

    async getClassifications(utterance) {
        const result = await this.nlu.process(utterance);
        return result.classifications.sort((a, b) => b.score - a.score);
    }

    async getBestClassification(utterance) {
        const result = await this.getClassifications(utterance);
        return result[0];
    }
}

module.exports = BrainNLU;
