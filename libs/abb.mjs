import fs from 'fs';
import path from 'path';
import { NlpManager } from '../nlp/index.js';
import { isFileExist } from '../utils/isFileExist.mjs';

export default async function (question) {
    const modelPath = path.join(process.cwd(), 'abb/model.abb');
    if (!isFileExist(modelPath)) {
        console.error('You will need to first create a Model');
        return;
    }

    const manager = new NlpManager();
    const model = fs.readFileSync(modelPath, 'utf8');
    manager.import(model);
    const response = await manager.process('en', question);
    if (response) {
        return {
            answers: response?.answers,
            answer: response?.answer,
        };
    } else {
        return {
            error: 'An Error Occurred',
        };
    }
}
