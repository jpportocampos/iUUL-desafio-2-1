import LeituraService from '../service/leitura-service.js';

export default class LeituraController {
    #leituraService = new LeituraService();

    readJSON() {
        return this.#leituraService.lerJSON();
    }
}