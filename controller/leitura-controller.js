import LeituraService from '../service/leitura-service.js';

export default class LeituraController {
    #leituraService = new LeituraService();

    readJSON(jsonPath) {
        return this.#leituraService.lerJSON(jsonPath);
    }
}