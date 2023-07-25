import EscritaPresenter from "../presenter/escrita-presenter.js";
import ValidacaoPresenter from "../presenter/validacao-presenter.js";
import EscritaController from "./escrita-controller.js";
import ValidacaoController from "./validacao-controller.js";

export default class MainController {
    validaJSON() {
        const controller = new ValidacaoController();

        const presenter = new ValidacaoPresenter(controller);

        presenter.run();
    }

    escreveJSON() {
        const controller = new EscritaController();

        const presenter = new EscritaPresenter(controller);

        presenter.run();
    }
}