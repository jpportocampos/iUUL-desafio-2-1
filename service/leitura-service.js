const fs = require('fs');

export default class LeituraService {
    lerJSON() {
        let jsonPath = process.argv.pop();
        console.log(jsonPath);

        let rawData = fs.readFileSync(jsonPath);

        let dataJSON = JSON.parse(rawData);

        return dataJSON;
    }
}