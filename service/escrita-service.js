import * as fs from 'node:fs';
import { DateTime } from "luxon";

export default class EscritaService {
    escreverJSON(jsonPath, result) {        
        let data = JSON.stringify(result, null, 2);
        
        let fileName = "-erros-" + DateTime.now().toFormat("ddLLyyyy-HHmmss") + ".json";

        jsonPath = jsonPath.toString().replace('.json', "");

        fs.writeFileSync(jsonPath + fileName, data);
    }
}