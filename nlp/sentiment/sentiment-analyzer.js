const { SentimentAnalyzer: SentimentAnalyzerBase } = require('@nlpjs/sentiment');
const { LangAll } = require('@nlpjs/lang-all');
const { Nlu } = require('@nlpjs/nlu');

class SentimentAnalyzer extends SentimentAnalyzerBase {
    constructor(settings = {}, container) {
        super(settings, container);
        this.container.use(LangAll);
        this.container.use(Nlu);
    }

    async getSentiment(utterance, locale = 'en', settings = {}) {
        const input = {
            utterance,
            locale,
            ...settings,
        };
        const result = await this.process(input);
        return result.sentiment;
    }
}

module.exports = SentimentAnalyzer;
