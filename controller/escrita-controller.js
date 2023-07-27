import EscritaService from "../service/escrita-service.js";

export default class EscritaController {
    #escritaService = new EscritaService();

    writeJSON(jsonPath, result) {
        this.#escritaService.escreverJSON(jsonPath, result);
    }
}