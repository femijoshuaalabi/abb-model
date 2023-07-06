const { Language } = require('./language');
const { NlpUtil, NlpManager, NlpExcelReader } = require('./nlp');
const { XTableUtils, XTable, XDoc } = require('./xtables');
const { removeEmojis, Evaluator, SpellCheck, Handlebars } = require('./util');
const { ActionManager, NlgManager } = require('./nlg');
const { NeuralNetwork } = require('./classifiers');
const { SentimentAnalyzer, SentimentManager } = require('./sentiment');
const { Recognizer, ConversationContext, MemoryConversationContext } = require('./recognizer');
const { BrainNLU } = require('./nlu');

module.exports = {
    Language,
    NlpUtil,
    NlpManager,
    NlpExcelReader,
    XTableUtils,
    XTable,
    XDoc,
    removeEmojis,
    Evaluator,
    SpellCheck,
    Handlebars,
    ActionManager,
    NlgManager,
    NeuralNetwork,
    SentimentAnalyzer,
    SentimentManager,
    Recognizer,
    ConversationContext,
    MemoryConversationContext,
    BrainNLU,
};
