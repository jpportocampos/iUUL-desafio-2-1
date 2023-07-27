import EscritaService from "../service/escrita-service.js";

export default class EscritaController {
    #escritaService = new EscritaService();

    writeJSON(result) {
        this.#escritaService.escreverJSON(result);
    }
}