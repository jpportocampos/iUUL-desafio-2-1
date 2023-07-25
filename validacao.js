const fs = require('fs');

import MainController from './controller/main-controller.js';
import MainPresenter from './presenter/main-presenter.js';

(function () {
    const controller = new MainController();

    const presenter = new MainPresenter(controller);

    presenter.run();
})();

let jsonPath = process.argv.pop();
console.log(jsonPath);

fs.readFile(jsonPath, (err, data) => {
    if (err) throw err;
    let pessoa = JSON.parse(data);
    console.log(pessoa);
});

let pessoa = [ {"nome":"Pedro de Almeida", "cpf":"78444434051",
"dt_nascimento":"15021996", "renda_mensal":"3584,12",
"estado_civil":"S" } ];

let data = JSON.stringify(pessoa, null, 2);

fs.writeFile(jsonPath, data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});