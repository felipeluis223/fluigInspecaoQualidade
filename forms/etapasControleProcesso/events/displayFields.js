function displayFields(form, customHTML) {
    var user = getValue("WKUser");

    var groups = [
        "grpColaborador",
        "grpCorte",
        "grpSecagem",
        "grpSerraria",
        "grpSupervisor"
    ];

    var constraints = [
        DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST)
    ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);

    var userGroup = {};
    for (var i = 0; i < groupDataset.rowsCount; i++) {
        var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
        for (var index = 0; index < groups.length; index++) {
            if (groupId == groups[index]) {
                userGroup[groups[index]] = groupId;
            }
        }
    }

    var now = new Date();
    var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
    var year = now.getFullYear();
    var formatDate = day + '/' + month + '/' + year;


    log.info("======================================================");
    log.info("Grupos - USUÁRIO: " + user);
    for (var key in userGroup) {
        if (userGroup.hasOwnProperty(key)) {
            log.info("Grupo identificado: " + key + " => " + userGroup[key]);
        }
    }
    log.info("======================================================");

    // Desabilita todos os campos por padrão
    var allFields = [
        "idColab", "nameColab", "batchId", "batchDate",
        "afiamento", "epi", "calibracao", "trincas", "nameRespCorte", "corteDate", "radioTypesCorte", "obsCorte",
        "recebimentoToras", "descascamento", "cortePrimario", "corteSecundario", "inspecaoVisual", "secagem",
        "armazenagem", "documentacao", "nameRespSerraria", "serrariaDate", "radioTypesSerraria", "obsSerraria",
        "empilhamento", "entradaForno", "curvaSecagem", "verifUmidade", "ausenciaRachaduras", "resfriamento",
        "nameRespSecagem", "secagemDate", "radioTypesSecagem", "obsSecagem",
        "idSupervisor", "nameSupervisor", "radioTypesSupervisor", "obsSupervisor",
        "visto"
    ];
    for (var i = 0; i < allFields.length; i++) {
        form.setEnabled(allFields[i], false);
    }

    // Habilitando os campos necessários para a primeira etapa do solicitante:
    if ("grpColaborador" in userGroup) {
        user = getValue("WKUser");
        
        form.setValue("nameColab", user);
        form.setValue("batchDate", formatDate);

        form.setEnabled("nameColab", false);
        form.setEnabled("batchDate", false);
        form.setEnabled("idColab", true);
        form.setEnabled("batchId", true);
        
        // Validando o primeiro radioButton para liberar o check após as condições:
        if((form.getValue("radioTypesCorte") == "success") || form.getValue("radioTypesCorte") == "danger"){
            form.setEnabled("idColab", false);
            form.setEnabled("batchId", false);
            form.setEnabled("visto", false);
        }
        
        form.setEnabled("visto", true);
    }

    if ("grpCorte" in userGroup) {
        user = getValue("WKUser");
        form.setEnabled("afiamento", true);
        form.setEnabled("epi", true);
        form.setEnabled("calibracao", true);
        form.setEnabled("trincas", true);
        form.setEnabled("nameRespCorte", true);
        form.setEnabled("corteDate", true);
        form.setEnabled("radioTypesCorte", true);
        form.setEnabled("obsCorte", true);
    }

    if ("grpSerraria" in userGroup) {
        user = getValue("WKUser");
        form.setEnabled("recebimentoToras", true);
        form.setEnabled("descascamento", true);
        form.setEnabled("cortePrimario", true);
        form.setEnabled("corteSecundario", true);
        form.setEnabled("inspecaoVisual", true);
        form.setEnabled("secagem", true);
        form.setEnabled("armazenagem", true);
        form.setEnabled("documentacao", true);
        form.setEnabled("nameRespSerraria", true);
        form.setEnabled("serrariaDate", true);
        form.setEnabled("radioTypesSerraria", true);
        form.setEnabled("obsSerraria", true);
    }

    if ("grpSecagem" in userGroup) {
        user = getValue("WKUser");
        form.setEnabled("empilhamento", true);
        form.setEnabled("entradaForno", true);
        form.setEnabled("curvaSecagem", true);
        form.setEnabled("verifUmidade", true);
        form.setEnabled("ausenciaRachaduras", true);
        form.setEnabled("resfriamento", true);
        form.setEnabled("nameRespSecagem", true);
        form.setEnabled("secagemDate", true);
        form.setEnabled("radioTypesSecagem", true);
        form.setEnabled("obsSecagem", true);
    }

    if ("grpSupervisor" in userGroup) {
        user = getValue("WKUser");
        form.setEnabled("idSupervisor", true);
        form.setEnabled("nameSupervisor", true);
        form.setEnabled("radioTypesSupervisor", true);
        form.setEnabled("obsSupervisor", true);
    }
}
