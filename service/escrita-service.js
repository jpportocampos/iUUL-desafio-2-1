import * as fs from 'node:fs';
import { DateTime } from "luxon";

export default class EscritaService {
    escreverJSON(result) {        
        let data = JSON.stringify(result);
        
        fs.writeFileSync("erros-" + DateTime.now().toFormat("ddLLyyyy-HHmmss") + ".json", data);
    }
}