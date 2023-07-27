import { DateTime } from "luxon";

export default class ValidacaoService {
    validarJSON(data) {
        let erros = "'erros': ["
        erros = erros + this.#validaNome(data.nome);
        erros = erros + this.#validaCPF(data.cpf);
        erros = erros + this.#validaDataNascimento(data.dt_nascimento);
        erros = erros + this.#validaRendaMensal(data.renda_mensal);
        erros = erros + this.#validaEstadoCivil(data.estado_civil);

        if (erros === "'erros': [") {
            erros = "[]";
        } else if (erros.endsWith("_ ")) {
            erros = erros.replace(/_([^_]*)$/, ']' + '$1');
        }

        erros = erros.replaceAll('}_', '},');

        return erros;
    }

    #validaNome(nome) {
        if (nome === "") {
            return "{'campo':'nome', 'mensagem':'campo obrigatório ausente'}_ "
        }
        if (nome.length < 5 || nome.length > 60) {
            return "{'campo':'nome', 'mensagem':'o nome precisa ter entre 5 e 60 caracteres'}_ ";
        }

        return "";
    }

    #validaCPF(cpf) {
        if (cpf === "") {
            return "{'campo':'cpf', 'mensagem':'campo obrigatório ausente'}_ "
        }
        if (cpf.length === 11) {
            if (this.#validaDigitosCPF(cpf) && this.#validaJ(cpf) && this.#validaK(cpf)) {
                return "";
            } else {
                return "{'campo':'cpf', 'mensagem':'o cpf é inválido'}_ "
            }
        } else {
            return "{'campo':'cpf', 'mensagem':'o cpf precisa tere 11 dígitos'}_ ";
        }
    }

    #validaDataNascimento(dataNascimento) {
        if (dataNascimento === "") {
            return "{'campo':'dt_nascimento', 'mensagem':'campo obrigatório ausente'}_ "
        }
        let data = DateTime.fromFormat(dataNascimento, "ddLLyyyy");
        let dataAtual = DateTime.now();

        var diffTempo = dataAtual.diff(data, ['months', 'days', 'years']).toObject();

        if (diffTempo.years < 18) {
            return "{'campo':'dt_nascimento', 'mensagem':'O cliente deve possuir mais de 18 anos'}_ ";
        }

        return "";
    }

    #validaRendaMensal(rendaMensal) {
        if (rendaMensal === "") {
            return "";
        }

        if (rendaMensal[rendaMensal.length - 3] !== ',') {
            return "{'campo':'renda_mensal', 'mensagem':'O valor deve possuir duas casas decimais separadas por vírgula'}_ ";
        }

        return "";
    }

    #validaEstadoCivil(estadoCivil) {
        if (estadoCivil === "") {
            return "";
        }

        if (estadoCivil.toUpperCase() !== 'C' && estadoCivil.toUpperCase() !== 'S' && estadoCivil.toUpperCase() !== 'V' && estadoCivil.toUpperCase() !== 'D') {
            return "{'campo':'estado_civil', 'mensagem':'O estado civil deve ser C, S, V ou D'}]";
        }

        return "";
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