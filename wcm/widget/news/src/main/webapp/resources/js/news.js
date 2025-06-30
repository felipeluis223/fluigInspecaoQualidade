var ProcessoDatatable = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    
    init: function () {
        this.carregarTabela();
    },

    carregarTabela: function () {
        var dados = [
            { numero: "302", status: "Secagem", data: "2025-06-28" },
            { numero: "295", status: "Análise", data: "2025-06-25" },
            { numero: "310", status: "Corte", data: "2025-06-30" }
        ];

        var tabela = $("#datatableProcessos");

        dados.forEach(function (item) {
            tabela.append(
                "<tr>" +
                    "<td>" + item.numero + "</td>" +
                    "<td>" + item.status + "</td>" +
                    "<td>" + item.data + "</td>" +
                "</tr>"
            );
        });
    }
});
