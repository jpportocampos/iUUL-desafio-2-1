import EscritaController from "./escrita-controller.js";
import FormatacaoController from "./formatacao-controller.js";
import LeituraController from "./leitura-controller.js";
import ValidacaoController from "./validacao-controller.js";

export default class MainController {
    leJSON(jsonPath) {
        const controller = new LeituraController();

        return controller.readJSON(jsonPath);
    }

    validaJSON(data) {
        const controller = new ValidacaoController();

        return controller.checkJSON(data);
    }

    formataJSON(data, erros) {
        const controller = new FormatacaoController();

        return controller.formatJSON(data, erros);
    }

    escreveJSON(result) {
        const controller = new EscritaController();

        controller.writeJSON(result);
    }
}