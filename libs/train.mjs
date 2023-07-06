import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { NlpManager } from '../nlp/index.js';
import { isFileExist } from '../utils/isFileExist.mjs';

export default async function (modelObject) {
    const abbModelPath = 'abb/model.abb';
    const dirPath = path.join(process.cwd(), 'abb');

    await fsp.mkdir(dirPath, { recursive: true }).catch((err) => {
        console.error('ABB got an error', err);
    });

    if (!(modelObject != null && modelObject.constructor.name === 'Object')) {
        console.error('Please pass an Object to the model arguments');
        return;
    }

    const modelPath = modelObject.model;
    if (typeof modelPath == 'undefined') {
        console.error('Please provide your Model Path');
        return;
    }

    if (!modelPath?.match('.json$', 'i')) {
        console.error('Please make sure your Model is a JSON file');
        return;
    }

    if (!isFileExist(path.join(process.cwd(), modelPath))) {
        console.error('Model file does not exist');
        return;
    }

    const getModelData = fs.readFileSync(path.join(process.cwd(), modelPath), 'utf8');

    const manager = new NlpManager({
        languages: ['en'],
        forceNER: true,
        nlu: { log: true },
        modelFileName: path.join(process.cwd(), abbModelPath),
    });

    if (isFileExist(path.join(process.cwd(), abbModelPath))) {
        const model = fs.readFileSync(path.join(process.cwd(), abbModelPath), 'utf8');
        manager.import(model);
    }

    const intents = JSON.parse(getModelData);
    for (let i = 0; i < intents.length; i++) {
        const patterns = intents[i].patterns;
        const responses = intents[i].responses;
        const tag = intents[i].tag;
        for (let p = 0; p < patterns.length; p++) {
            manager.addDocument('en', patterns[p], tag);
        }
        for (let r = 0; r < responses.length; r++) {
            manager.addAnswer('en', tag, responses[r]);
        }
    }
    // Train and save the model.
    await manager.train();
    manager.save(path.join(process.cwd(), abbModelPath));
    return 'Successfully train and save the model';
}
