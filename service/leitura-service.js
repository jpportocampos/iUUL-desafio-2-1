import * as fs from 'node:fs';
import UserException from '../utils/user-exception.js';

export default class LeituraService {
    lerJSON(jsonPath) {
        let rawData = fs.readFileSync(jsonPath);

        let dataJSON = JSON.parse(rawData);

        if (!Array.isArray(dataJSON)) {
            throw new UserException("O arquivo não contém um array");
        }

        return dataJSON;
    }
}