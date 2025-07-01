function displayFields(form, customHTML) {
    var user = getValue("WKUser");

    var groups = [
        "grpColaborador", // MariaTeste
        "grpCorte",       // FelipeTeste
        "grpSecagem",     // JoaoTeste
        "grpSerraria",    // CassandraTeste
        "grpSupervisor"   // JanainaTeste
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

    function getDate(){
        var now = new Date();
        var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
        var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
        var year = now.getFullYear();
        var formatDate = day + '/' + month + '/' + year;
        return formatDate;
    }

    // Habilitando os campos necessários para a primeira etapa do solicitante:
    if ("grpColaborador" in userGroup) {
        user = getValue("WKUser");
        
        form.setValue("nameColab", user);
        form.setValue("batchDate", getDate());

        form.setEnabled("nameColab", false);
        form.setEnabled("batchDate", false);
        form.setEnabled("idColab", true);
        form.setEnabled("batchId", true);
        
        // Validando o primeiro radioButton para liberar o check após as condições:
        if((form.getValue("radioTypesCorte") == "success") || form.getValue("radioTypesCorte") == "danger"){
            form.setEnabled("idColab", false);
            form.setEnabled("batchId", false);
            form.setEnabled("visto", true);
        }
    }

    if ("grpCorte" in userGroup) {
        user = getValue("WKUser");
        form.setValue("nameRespCorte", user);
        form.setValue("corteDate", getDate());

        form.setEnabled("corteDate", false);
        form.setEnabled("nameRespCorte", false);

        form.setEnabled("afiamento", true);
        form.setEnabled("epi", true);
        form.setEnabled("calibracao", true);
        form.setEnabled("trincas", true);
        form.setEnabled("radioTypesCorte", true);
        form.setEnabled("obsCorte", true);
    }

    if ("grpSerraria" in userGroup) {
        user = getValue("WKUser");
        form.setValue("nameRespSerraria", user);
        form.setValue("serrariaDate", getDate());
        
        form.setEnabled("serrariaDate", false);
        form.setEnabled("nameRespSerraria", false);

        form.setEnabled("recebimentoToras", true);
        form.setEnabled("descascamento", true);
        form.setEnabled("cortePrimario", true);
        form.setEnabled("corteSecundario", true);
        form.setEnabled("inspecaoVisual", true);
        form.setEnabled("secagem", true);
        form.setEnabled("armazenagem", true);
        form.setEnabled("documentacao", true);
        form.setEnabled("radioTypesSerraria", true);
        form.setEnabled("obsSerraria", true);
    }

    if ("grpSecagem" in userGroup) {
        user = getValue("WKUser");
        form.setValue("nameRespSecagem", user);
        form.setValue("secagemDate", getDate());

        form.setEnabled("secagemDate", false);
        form.setEnabled("nameRespSecagem", false);
        
        form.setEnabled("empilhamento", true);
        form.setEnabled("entradaForno", true);
        form.setEnabled("curvaSecagem", true);
        form.setEnabled("verifUmidade", true);
        form.setEnabled("ausenciaRachaduras", true);
        form.setEnabled("resfriamento", true);
        form.setEnabled("radioTypesSecagem", true);
        form.setEnabled("obsSecagem", true);
    }

    if ("grpSupervisor" in userGroup) {
        user = getValue("WKUser");
        form.setValue("nameSupervisor", user);
        form.setValue("supervisorDate", getDate());

        form.setEnabled("supervisorDate", false);
        form.setEnabled("nameSupervisor", false);

        form.setEnabled("idSupervisor", true);
        form.setEnabled("radioTypesSupervisor", true);
        form.setEnabled("obsSupervisor", true);
    }
}
