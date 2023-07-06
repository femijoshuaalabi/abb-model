import fs from 'fs';

export function isFileExist(path) {
    try {
        if (fs.existsSync(path)) {
            return true;
        }
    } catch (err) {
        return false;
    }
}
