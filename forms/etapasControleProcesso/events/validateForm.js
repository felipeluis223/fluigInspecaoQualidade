function validateForm(form) {
    var activity = parseInt(getValue("WKNumState"));

    // Solicitante do Processo:
    if(activity == 1){
        var activitySolicitar = {
            idColab: form.getValue("idColab"),
            nameColab: form.getValue("nameColab"),
            idLote: form.getValue("batchId"),
            dateLote: form.getValue("batchDate")
        };
        if(activitySolicitar.idColab == ""){
            throw 'Por favor, preencha o campo "ID do Colaborador" antes de prosseguir.';
        }
        if(activitySolicitar.nameColab == ""){
            throw 'Por favor, preencha o campo "Nome do Colaborador" antes de continuar.';
        }
        if(activitySolicitar.idLote == ""){
            throw 'Por favor, preencha o campo "ID do Lote" antes de continuar.';
        }
        if(activitySolicitar.dateLote == ""){
            throw 'Por favor, preencha a "Data da Solicitação" do Lote antes de continuar.';
        }
    }

    // Processo de Corte:
    if(activity == 4){
        var activityCorte = {
            afiamento: form.getValue("afiamento"),
            epi: form.getValue("epi"),
            calibracao: form.getValue("calibracao"),
            trincas: form.getValue("trincas"),
            nameResp: form.getValue("nameResCorte"),
            dateCorte: form.getValue("corteDate"),
            status: form.getValue("radioTypesCorte")
        };
        // Validando checkbox:
        if ((activityCorte.afiamento != "on") || 
            (activityCorte.epi != "on") || 
            (activityCorte.calibracao != "on") || 
            (activityCorte.trincas != "on")) {
            throw "Todos os itens do checklist da etapa de Corte devem ser marcados.";
        }
        if(activityCorte.nameResp == ""){
            throw 'Por favor, preencha o campo "Nome do Responsável" antes de continuar.';
        }
        if(activityCorte.dateCorte == ""){
            throw 'Por favor, preencha a "Data do Corte" antes de continuar.';
        }
        if(activityCorte.status == ""){
            throw 'Por favor, preencha o "Status" antes de continuar.';
        }
    }

    // Processo Serraria:
    if(activity == 6){
        var activitySerraria = {
            recebimentoToras: form.getValue("recebimentoToras"),
            descascamento: form.getValue("descascamento"),
            cortePrimario: form.getValue("cortePrimario"),
            corteSecundario: form.getValue("corteSecundario"),
            inspecaoVisual: form.getValue("inspecaoVisual"),
            secagem: form.getValue("secagem"),
            armazenagem: form.getValue("armazenagem"),
            documentacao: form.getValue("documentacao"),
            nameResp: form.getValue("nameRespSerraria"),
            dateInspecao: form.getValue("serrariaDate"),
            status: form.getValue("radioTypesSerraria")
        };
        if((activitySerraria.recebimentoToras != "on") ||
            (activitySerraria.descascamento != "on") ||
            (activitySerraria.cortePrimario != "on") ||
            (activitySerraria.corteSecundario != "on") ||
            (activitySerraria.inspecaoVisual != "on") ||
            (activitySerraria.secagem != "on") ||
            (activitySerraria.armazenagem != "on") ||
            (activitySerraria.documentacao != "on")){
                throw "Todos os itens do checklist da etapa de Serraria devem ser marcados.";
        }
        if(activitySerraria.nameResp == ""){
            throw 'Por favor, preencha o campo "Nome do Responsável" antes de continuar.';
        }
        if(activitySerraria.dateInspecao == ""){
            throw 'Por favor, preencha a "Data da Serraria" antes de continuar.';
        }
        if(activitySerraria.status == ""){
            throw 'Por favor, preencha o "Status" antes de continuar.';
        }
    }

    // Processo de Secagem:
    if(activity == 8){
        var activitySecagem = {
            empilhamento: form.getValue("empilhamento"),
            entradaForno: form.getValue("entradaForno"),
            curvaSecagem: form.getValue("curvaSecagem"),
            verifUmidade: form.getValue("verifUmidade"),
            ausenciaRachaduras: form.getValue("ausenciaRachaduras"),
            resfriamento: form.getValue("resfriamento"),
            nameResp: form.getValue("nameRespSecagem"),
            dateInspecao: form.getValue("secagemDate"),
            status: form.getValue("radioTypesSecagem")
        };
        if((activitySecagem.empilhamento != "on") ||
            (activitySecagem.entradaForno != "on") ||
            (activitySecagem.curvaSecagem != "on") ||
            (activitySecagem.verifUmidade != "on") ||
            (activitySecagem.ausenciaRachaduras != "on") ||
            (activitySecagem.resfriamento != "on")){
                throw "Todos os itens do checklist da etapa de Secagem devem ser marcados.";
        }
        if(activitySecagem.nameResp == ""){
            throw 'Por favor, preencha o campo "Nome do Responsável" antes de continuar.';
        }
        if(activitySecagem.dateInspecao == ""){
            throw 'Por favor, preencha a "Data da Secagem" antes de continuar.';
        }
        if(activitySecagem.status == ""){
            throw 'Por favor, preencha o "Status" antes de continuar.';
        }
    }

    // Processo de Aprovação:
    if(activity == 10){
        var activitySupervisor = {
            id: form.getValue("idSupervisor"),
            nameResp: form.getValue("nameSupervisor"),
            dateInspecao: form.getValue("supervisorDate"),
            status: form.getValue("radioTypesSupervisor")
        };
        if(activitySupervisor.id == ""){}
        if(activitySupervisor.nameResp == ""){}
        if(activitySupervisor.dateInspecao == ""){}
        if(activitySupervisor.status == ""){}
    }

    // Processo de Retorno ao Solicitante:
    // Saída 51 - Retorno Negativo - Justificativa
    // Saída 16 - Retorno Positivo - Resultado
    if((activity == 16) || (activity ==51)){
        var activityResult = form.getValue("visto");
        if(activityResult != "on"){
            throw 'Marque como "Visto" para concluir o processo.'
        }
    }
}
