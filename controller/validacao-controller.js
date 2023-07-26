import ValidacaoService from "../service/validacao-service.js";

export default class ValidacaoController {
    #validacaoService = new ValidacaoService();

    checkJSON(data) {
        return this.#validacaoService.validarJSON(data);
    }
}