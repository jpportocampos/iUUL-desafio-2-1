import * as fs from 'node:fs';

export default class LeituraService {
    lerJSON(jsonPath) {
        let rawData = fs.readFileSync(jsonPath);

        let dataJSON = JSON.parse(rawData);

        return dataJSON;
    }
}