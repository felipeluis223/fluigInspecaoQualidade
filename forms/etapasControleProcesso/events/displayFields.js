function displayFields(form,customHTML){
    // Obtendo o usuário autenticado:
    var user = getValue("WKUser");
    
    // Grupos definidos do processo:
    // var groups = {
    //     corte: "grpCorte",
    //     serraria: "grpSerraria",
    //     secagem: "grpSecagem",
    //     supervisor: "grpSupervisor",
    // }

    // // Consulta os grupos do usuários:
    // var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST)];
    // var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
    
    // // Flag de grupos:
    // var userGroup = []; 

    // for(var i=0; groupDataset.rowsCount; i++){
    //     var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
    //     userGroup.push(groupId);
    // };
    
    
    // Preencher data atual
    var now = new Date();
    var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
    var year = now.getFullYear();
    var formatDate = day + '/' + month + '/' + year;

    // Campos iniciais comuns (preenche e bloqueia)
    form.setValue("nameColab", user);
    form.setEnabled("nameColab", false);

    form.setValue("batchDate", formatDate);
    form.setEnabled("batchDate", false);

}