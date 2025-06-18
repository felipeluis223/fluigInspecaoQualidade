function validateForm(form){

    // Colaborador Solicitante - Validação:
    var dadosColabSolicitante = {
        id: form.getValue("idColab"),
        nome: form.getValue("nameColab"),
        idLote: form.getValue("batchId"),
        dataLote: form.getValue("batchDate")
    };
    
    var dadosResponsavelCorte = {
        checkbox: {
            afiamento: form.getValue("afiamento"),
            epi: form.getValue("epi"),
            calibracao: form.getValue("calibracao"),
            trincas: form.getValue("trincas"),
        },
        nome: form.getValue("nameRespCorte"),
        data: form.getValue("corteDate"),
        status: form.getValue("radioTypesCorte") 
    };

    var dadosResponsavelSerraria = {
        checkbox: {
            recebimentoToras: form.getValue("recebimentoToras"),
            descascamento: form.getValue("descascamento"),
            cortePrimario: form.getValue("cortePrimario"),
            corteSecundario: form.getValue("corteSecundario"),
            inspecaoVisual: form.getValue("inspecaoVisual"),
            secagem: form.getValue("secagem"),
            armazem: form.getValue("armazenagem"),
            documentacao: form.getValue("documentacao"),
        },
        nome: form.getValue("nameRespSerraria"),
        data: form.getValue("serrariaDate"),
        status: form.getValue("radioTypesSerraria")
    };

    var dadosResponsavelSecagem = {
        checkbox: {
            empilhamento: form.getValue("empilhamento"),
            entradaForno: form.getValue("entradaForno"),
            curvaSecagem: form.getValue("curvaSecagem"),
            verifUmidade: form.getValue("verifUmidade"),
            ausenciaRachaduras: form.getValue("ausenciaRachaduras"),
            resfriamento: form.getValue("resfriamento"),
        },
        nome: form.getValue("nameRespSecagem"),
        data: form.getValue("secagemDate"),
        status: form.getValue("radioTypesSecagem") 
    }

};