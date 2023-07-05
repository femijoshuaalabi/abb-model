import { NlpManager } from 'node-nlp';
import fs from 'fs';
import path from 'path';
import { isFileExist } from '../utils/isFileExist.js';

export default async function () {
    const modelPath = path.join(process.cwd(), 'abb/model.abb');
    if (!isFileExist(modelPath)) {
        console.error('You will need to first create a Model');
        return;
    }

    const manager = new NlpManager();
    const model = fs.readFileSync(modelPath, 'utf8');
    manager.import(model);
    const response = await manager.process('en', 'Hello');
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
