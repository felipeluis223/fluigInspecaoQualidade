function validateForm(form) {
    var activity = parseInt(getValue("WKNumState"));

    // Validação por Processo:
    
    // Solicitante do Processo:
    if(activity == 1){
        if(form.getValue("idColab") == ""){
            throw "Por favor preencha o campo ID do colaborador!"
        }
        if(form.getValue("nameColab") == ""){
            throw "Por favor preencha o campo nome do colaborador!"
        }
        if(form.getValue("batchId") == ""){
            throw "Por favor preencha o campo ID do lote!"
        }
        if(form.getValue("batchDate") == ""){
            throw "Por favor preencha a data da solicitação do lote!"
        }
    }

}
