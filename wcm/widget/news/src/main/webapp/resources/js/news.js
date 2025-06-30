var ProcessoDatatable = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    
    init: function () {
        this.carregarTabela();
    },

    carregarTabela: function () {
        var dados = [
            { id: "1001", etapa: "Corte", data: "2025-06-21" },
            { id: "1002", etapa: "Serraria", data: "2025-06-22" },
            { id: "1003", etapa: "Secagem", data: "2025-06-23" },
            { id: "1004", etapa: "Análise", data: "2025-06-24" },
            { id: "1005", etapa: "Corte", data: "2025-06-25" },
            { id: "1006", etapa: "Serraria", data: "2025-06-26" },
            { id: "1007", etapa: "Secagem", data: "2025-06-27" },
            { id: "1008", etapa: "Análise", data: "2025-06-28" },
            { id: "1009", etapa: "Corte", data: "2025-06-29" },
            { id: "1010", etapa: "Serraria", data: "2025-06-30" }
        ];

        var tabela = $("#datatableProcessos");

        dados.forEach(function (item) {
            tabela.append(
                "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.etapa + "</td>" +
                    "<td>" + item.data + "</td>" +
                "</tr>"
            );
        });
    }
});
