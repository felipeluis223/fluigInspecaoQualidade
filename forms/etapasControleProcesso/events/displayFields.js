function displayFields(form, customHTML) {
    var user = getValue("WKUser");
    var atividade = getValue("WKNumState");

    // Grupos do processo
    var groups = [
        "grpColaborador",
        "grpCorte",
        "grpSerraria",
        "grpSecagem",
        "grpSupervisor"
    ];

    // Dataset de grupos do usuário
    var constraints = [
        DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST)
    ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);

    // var userGroup = [];
    var userGroup = {}
    for (var i = 0; i < groupDataset.rowsCount; i++) {
        var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
        
        for(var index = 0; index <= groups.length; index++){
            if (groupId == groups[index]){
                userGroup[groups[index]] = groupId
            }
        }
    }

    // Preenche campos iniciais
    var now = new Date();
    var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
    var year = now.getFullYear();
    var formatDate = day + '/' + month + '/' + year;

    form.setValue("nameColab", user);
    form.setEnabled("nameColab", false);

    form.setValue("batchDate", formatDate);
    form.setEnabled("batchDate", false);

    log.info("======================================================");
    log.info("Grupos - USUÁRIO: " + user + " -------> " + userGroup);
    log.info("======================================================");
    
    for (var key in userGroup) {
        if (userGroup.hasOwnProperty(key)) {
            log.info("Grupo identificado: " + key + " => " + userGroup[key]);
        }
    }
    log.info("======================================================");


    // solução do problema: Desabilitar todos os campos inputs e habilitar conforme o grupo do usuário:

    // Colaborador Solicitante: 
    form.setEnabled("idColab", false);
    form.setEnabled("nameColab", false);
    form.setEnabled("batchId", false);
    form.setEnabled("batchDate", false);
    
    // Corte:
    form.setEnabled("afiamento", false);
    form.setEnabled("epi", false);
    form.setEnabled("calibracao", false);
    form.setEnabled("trincas", false);
    form.setEnabled("nameRespCorte", false);
    form.setEnabled("corteDate", false);
    form.setEnabled("radioTypesCorte", false);
    form.setEnabled("obsCorte", false);

    // Serraria:
    form.setEnabled("recebimentoToras", false);
    form.setEnabled("descascamento", false);
    form.setEnabled("cortePrimario", false);
    form.setEnabled("corteSecundario", false);
    form.setEnabled("inspecaoVisual", false);
    form.setEnabled("secagem", false);
    form.setEnabled("armazenagem", false);
    form.setEnabled("documentacao", false);
    form.setEnabled("nameRespSerraria", false);
    form.setEnabled("serrariaDate", false);
    form.setEnabled("radioTypesSerraria", false);
    form.setEnabled("obsSerraria", false);

    // Secagem:
    form.setEnabled("empilhamento", false);
    form.setEnabled("entradaForno", false);
    form.setEnabled("curvaSecagem", false);
    form.setEnabled("verifUmidade", false);
    form.setEnabled("ausenciaRachaduras", false);
    form.setEnabled("resfriamento", false);
    form.setEnabled("nameRespSecagem", false);
    form.setEnabled("secagemDate", false);
    form.setEnabled("radioTypesSecagem", false);
    form.setEnabled("obsSecagem", false);

    // Supervisor:
    form.setEnabled("idSupervisor", false);
    form.setEnabled("nameSupervisor", false);
    form.setEnabled("radioTypesSupervisor", false);
    form.setEnabled("obsSupervisor", false);

    // Colaborador Solicitante:
    form.setEnabled("visto", false);




    // Lebrando que estou trabalhando por grupo:
    // No cenário de colaborador (solicitante): Temos que deixar apenas IdColab e IdLote para preencher, e os demais ficar oculto
    // No cenário de corte - temos que deixar os campos do colaborador desabilitados e liberar os campos de "dadosCorte" para o preenchimento
    // No cenário de serraria - temos que deixar os campos de colaborador e corte desabilitados e liberar os campos de "dadosSerraria" para o preenchimento
    // Assim por diante em na etapa de Secagem e Supervisor
} 
