var ProcessoDatatable = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    
    init: function () {
        this.carregarTabela();
    },

    carregarTabela: function () {
        var dados = [
            { numero: "1001", etapa: "Corte", data: "2025-06-21" },
            { numero: "1002", etapa: "Serraria", data: "2025-06-22" },
            { numero: "1003", etapa: "Secagem", data: "2025-06-23" },
            { numero: "1004", etapa: "Análise", data: "2025-06-24" },
            { numero: "1005", etapa: "Corte", data: "2025-06-25" },
            { numero: "1006", etapa: "Serraria", data: "2025-06-26" },
            { numero: "1007", etapa: "Secagem", data: "2025-06-27" },
            { numero: "1008", etapa: "Análise", data: "2025-06-28" },
            { numero: "1009", etapa: "Corte", data: "2025-06-29" },
            { numero: "1010", etapa: "Serraria", data: "2025-06-30" }
        ];

        var tabela = $("#datatableProcessos");

        dados.forEach(function (item) {
            tabela.append(
                "<tr>" +
                    "<td>" + item.numero + "</td>" +
                    "<td>" + item.etapa + "</td>" +
                    "<td>" + item.data + "</td>" +
                "</tr>"
            );
        });
    }
});
