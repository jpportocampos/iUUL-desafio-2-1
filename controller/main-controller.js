import EscritaController from "./escrita-controller.js";
import LeituraController from "./leitura-controller.js";
import ValidacaoController from "./validacao-controller.js";

export default class MainController {
    leJSON() {
        const controller = new LeituraController();

        return controller.readJSON();
    }

    validaJSON(data) {
        const controller = new ValidacaoController();

        return controller.checkJSON(data);
    }

    escreveJSON() {
        const controller = new EscritaController();

        controller.run();
    }
}