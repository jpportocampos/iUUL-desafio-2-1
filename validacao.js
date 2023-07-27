import MainController from './controller/main-controller.js';
import SystemException from './utils/system-exception.js';

(function () {
    const controller = new MainController();

    try {
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
    
        controller.escreveJSON(jsonPath, result);
    } catch (error) {
        throw new SystemException("Ocorreu um erro ao processar o arquivo, verifique o caminho passado e tente novamente");
    }
})();