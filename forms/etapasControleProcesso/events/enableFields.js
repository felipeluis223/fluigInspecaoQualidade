function enableFields(form){
    // Desabilita todos os campos por padrão:
    var allFields = [
        "idColab", "nameColab", "batchId", "batchDate",
        "afiamento", "epi", "calibracao", "trincas", "nameRespCorte", "corteDate", "radioTypesCorte", "obsCorte",
        "recebimentoToras", "descascamento", "cortePrimario", "corteSecundario", "inspecaoVisual", "secagem",
        "armazenagem", "documentacao", "nameRespSerraria", "serrariaDate", "radioTypesSerraria", "obsSerraria",
        "empilhamento", "entradaForno", "curvaSecagem", "verifUmidade", "ausenciaRachaduras", "resfriamento",
        "nameRespSecagem", "secagemDate", "radioTypesSecagem", "obsSecagem",
        "idSupervisor", "nameSupervisor", "supervisorDate", "radioTypesSupervisor", "obsSupervisor",
        "visto"
    ];
    for (var i = 0; i < allFields.length; i++) {
        form.setEnabled(allFields[i], false);
    }
 }