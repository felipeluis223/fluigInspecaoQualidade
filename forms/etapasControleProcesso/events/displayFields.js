function displayFields(form,customHTML){
    // Obtendo o usuário autenticado:
    var user = getValue("WKUser");
    
    // Grupos definidos do processo:
    var groups = {
        corte: "grpCorte",
        serraria: "grpSerraria",
        secagem: "grpSecagem",
        supervisor: "grpSupervisor",
    }

    // Consulta os grupos do usuários:
    var constraints = [ DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", user, user, ConstraintType.MUST)];
    var groupDataset = DatasetFactory.getDataset("colleagueGroup", null, constraints, null);
    
    // Flag de grupos:
    var userGroup = []; 

    for(var i=0; groupDataset.rowsCount; i++){
        var groupId = groupDataset.getValue(i, "colleagueGroupPK.groupId");
        userGroup.push(groupId);
    };
    


}