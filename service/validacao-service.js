export default class ValidacaoService {
    validarJSON(data) {
        for (let index = 0; index < data.length; index++) {
            this.#validaNome(data[index].nome);
            this.#validaCPF(data[index].cpf);
            this.#validaDataNascimento(data[index].dt_nascimento);
            this.#validaRendaMensal(data[index].renda_mensal);
            this.#validaEstadoCivil(data[index].estado_civil);
        }
    }

    #validaNome(nome) {
        if (nome.length < 5 || nome.length > 60) {
            return false;
        }
    }

    #validaCPF(cpf) {
        if (cpf.length === 11) {
            if (this.#validaDigitosCPF(cpf) && this.#validaJ(cpf) && this.#validaK(cpf)) {
                return true;
            }
        } else {
            return false;
        }
    }

    #validaDataNascimento(dataNascimento) {
        let data = DateTime.fromFormat(dataNascimento, "DDMMAAAA");
        let dataAtual = DateTime.now();

        var diffTempo = dataAtual.diff(data, ['months', 'days', 'years']).toObject();

        if (diffTempo.years < 18) {
            return false;
        }

        return true;
    }

    #validaRendaMensal(rendaMensal) {
        if (rendaMensal === undefined) {
            return true;
        }

        if (rendaMensal[rendaMensal.length - 3] !== ',') {
            return false;
        }

        return true;
    }

    #validaEstadoCivil(estadoCivil) {
        if (estadoCivil === undefined) {
            return true;
        }

        if (estadoCivil.toUpperCase() !== 'C' || estadoCivil.toUpperCase() !== 'S' || estadoCivil.toUpperCase() !== 'V' || estadoCivil.toUpperCase() !== 'D') {
            return false;
        }

        return true;
    }

    #validaDigitosCPF(cpf) {
        let digito = cpf[0];

        for (let index = 0; index < cpf.length; index++) {
            if (cpf[index] !== digito) {
                return true;
            }
        }

        return false;
    }

    #validaJ(cpf) {
        const j = cpf.toString()[9];

        const a = cpf.toString()[0];
        const b = cpf.toString()[1];
        const c = cpf.toString()[2];
        const d = cpf.toString()[3];
        const e = cpf.toString()[4];
        const f = cpf.toString()[5];
        const g = cpf.toString()[6];
        const h = cpf.toString()[7];
        const i = cpf.toString()[8];

        let soma = (10 * parseInt(a)) + (9 * parseInt(b)) + (8 * parseInt(c)) + (7 * parseInt(d)) + (6 * parseInt(e)) + (5 * parseInt(f)) + (4 * parseInt(g)) + (3 * parseInt(h)) + (2 * parseInt(i));

        let resto = soma % 11;

        if (resto === 0 || resto === 1) {
            if (parseInt(j) !== 0) {
                return false;
            } else {
                return true;
            }
        } else if (resto >= 2 && resto <= 10) {
            if (parseInt(j) !== (11 - resto)) {
                return false;
            } else {
                return true;
            }
        }

        return false;
    }

    #validaK(cpf) {
        const k = cpf.toString()[10];

        const a = cpf.toString()[0];
        const b = cpf.toString()[1];
        const c = cpf.toString()[2];
        const d = cpf.toString()[3];
        const e = cpf.toString()[4];
        const f = cpf.toString()[5];
        const g = cpf.toString()[6];
        const h = cpf.toString()[7];
        const i = cpf.toString()[8];
        const j = cpf.toString()[9];

        let soma = (11 * parseInt(a)) + (10 * parseInt(b)) + (9 * parseInt(c)) + (8 * parseInt(d)) + (7 * parseInt(e)) + (6 * parseInt(f)) + (5 * parseInt(g)) + (4 * parseInt(h)) + (3 * parseInt(i)) + (2 * parseInt(j));

        let resto = soma % 11;

        if (resto === 0 || resto === 1) {
            if (parseInt(k) !== 0) {
                return false;
            } else {
                return true;
            }
        } else if (resto >= 2 && resto <= 10) {
            if (parseInt(k) !== (11 - resto)) {
                return false;
            } else {
                return true;
            }
        }

        return false;
    }
}