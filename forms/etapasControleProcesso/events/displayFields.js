function displayFields(form, customHTML) {
    var user = getValue("WKUser");
    var atividade = getValue("WKNumState");

    // Grupos do processo
    var groups = {
        corte: "grpCorte",
        serraria: "grpSerraria",
        secagem: "grpSecagem",
        supervisor: "grpSupervisor"
    };

    // Dataset de grupos do usuário
    var constraints = [
        DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST)
    ];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);

    var userGroup = [];
    for (var i = 0; i < groupDataset.rowsCount; i++) {
        var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
        userGroup.push(groupId);
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

    // Lebrando que estou trabalhando por grupo:
    // No cenário de colaborador (solicitante): Temos que deixar apenas IdColab e IdLote para preencher, e os demais ficar oculto
    // No cenário de corte - temos que deixar os campos do colaborador desabilitados e liberar os campos de "dadosCorte" para o preenchimento
    // No cenário de serraria - temos que deixar os campos de colaborador e corte desabilitados e liberar os campos de "dadosSerraria" para o preenchimento
    // Assim por diante em na etapa de Secagem e Supervisor
} 
