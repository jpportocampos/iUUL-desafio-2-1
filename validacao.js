import MainController from './controller/main-controller.js';

(function () {
    const controller = new MainController();

    let jsonPath = process.argv.pop();

    let dataJSON = controller.leJSON(jsonPath);

    let result = '[';

    for (let index = 0; index < dataJSON.length; index++) {
        let erros = controller.validaJSON(dataJSON[index]);
        result = result + controller.formataJSON(dataJSON[index], erros);
    }

    if (result.endsWith("_")) {
        result = result.replace(/_([^_]*)$/, ']' + '$1');
    } else if (result === "[") {
        result = "[]";
    }

    result = result.replaceAll('}_', '},');

    controller.escreveJSON(result);
})();