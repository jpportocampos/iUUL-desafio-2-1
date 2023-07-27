import FormatacaoService from "../service/formatacao-service.js";

export default class FormatacaoController {
    #formatacaoService = new FormatacaoService();

    formatJSON(data, erros) {
        return this.#formatacaoService.formatarJSON(data, erros);
    }
}