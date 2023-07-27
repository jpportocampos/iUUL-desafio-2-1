export default class FormatacaoService {
    formatarJSON(data, erros) {
        if (erros !== "[]") {
            let dadosCliente = "{ 'dados': {'nome': '" + data.nome + "', 'cpf': '" + data.cpf + "', 'dt_nascimento': '" + data.dt_nascimento + 
            "', 'renda_mensal': '" + data.renda_mensal + "', 'estado_civil': '" + data.estado_civil + "'}_"

            erros = erros.replace("", dadosCliente);

            return erros;
        }

        return "";
    }
}