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

    // Atividade de confirmação final (ex: id 15)
    var ATIV_CONFIRMACAO = 15;
    if (atividade == ATIV_CONFIRMACAO) {
        var fields = form.getCardData();
        for (var key in fields) {
            form.setEnabled(key, false);
        }
        form.setEnabled("visto", true); // Apenas o checkbox da confirmação
        return; // Sai da função aqui
    }

    // Se for SUPERVISOR
    if (userGroup.indexOf(groups.supervisor) > -1) {
        var fields = form.getCardData();
        for (var key in fields) {
            form.setEnabled(key, false); // Desabilita todos
        }

        // Habilita apenas campos do supervisor
        form.setEnabled("idSupervisor", true);
        form.setEnabled("nameSupervisor", true);
        form.setEnabled("radioTypesSupervisor", true); // Os dois radios compartilham o name
        form.setEnabled("obsSupervisor", true);
    }

    // Mostrar seções específicas por grupo
    if (userGroup.indexOf(groups.corte) > -1) {
        customHTML.append("<script>document.getElementsByName('dadosCorte')[0].style.display = 'block';</script>");
    }

    if (userGroup.indexOf(groups.serraria) > -1) {
        customHTML.append("<script>document.getElementsByName('dadosSerraria')[0].style.display = 'block';</script>");
    }

    if (userGroup.indexOf(groups.secagem) > -1) {
        customHTML.append("<script>document.getElementsByName('dadosSecagem')[0].style.display = 'block';</script>");
    }

    if (userGroup.indexOf(groups.supervisor) > -1) {
        customHTML.append("<script>document.getElementsByName('dadosSupervisor')[0].style.display = 'block';</script>");
    }
}
