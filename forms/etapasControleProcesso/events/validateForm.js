// function validateForm(form) {
//     // Colaborador Solicitante:
//     var dadosColabSolicitante = {
//         id: form.getValue("idColab"),
//         nome: form.getValue("nameColab"),
//         idLote: form.getValue("batchId"),
//         dataLote: form.getValue("batchDate")
//     };

//     if (dadosColabSolicitante.id == "") {
//         throw "Id do solicitante inválido.";
//     }
//     if (dadosColabSolicitante.nome == "") {
//         throw "Nome do solicitante inválido.";
//     }
//     if (dadosColabSolicitante.idLote == "") {
//         throw "Id do lote inválido.";
//     }
//     if (dadosColabSolicitante.dataLote == "") {
//         throw "Data da solicitação inválida.";
//     }

//     // Corte:
//     var dadosResponsavelCorte = {
//         checkbox: {
//             afiamento: form.getValue("afiamento"),
//             epi: form.getValue("epi"),
//             calibracao: form.getValue("calibracao"),
//             trincas: form.getValue("trincas")
//         },
//         nome: form.getValue("nameRespCorte"),
//         data: form.getValue("corteDate"),
//         status: form.getValue("radioTypesCorte")
//     };

//     if (dadosResponsavelCorte.nome == "") {
//         throw "Responsável pelo corte inválido.";
//     }
//     if (dadosResponsavelCorte.data == "") {
//         throw "Data do processo de corte inválida.";
//     }
//     if (dadosResponsavelCorte.status == "") {
//         throw "Status do corte não informado.";
//     }
//     var corte = dadosResponsavelCorte.checkbox;
//     if (corte.afiamento == "") {
//         throw "Item 'Afiamento' não marcado no corte.";
//     }
//     if (corte.epi == "") {
//         throw "Item 'EPI' não marcado no corte.";
//     }
//     if (corte.calibracao == "") {
//         throw "Item 'Calibração' não marcado no corte.";
//     }
//     if (corte.trincas == "") {
//         throw "Item 'Trincas' não marcado no corte.";
//     }

//     // Serraria:
//     var dadosResponsavelSerraria = {
//         checkbox: {
//             recebimentoToras: form.getValue("recebimentoToras"),
//             descascamento: form.getValue("descascamento"),
//             cortePrimario: form.getValue("cortePrimario"),
//             corteSecundario: form.getValue("corteSecundario"),
//             inspecaoVisual: form.getValue("inspecaoVisual"),
//             secagem: form.getValue("secagem"),
//             armazem: form.getValue("armazenagem"),
//             documentacao: form.getValue("documentacao")
//         },
//         nome: form.getValue("nameRespSerraria"),
//         data: form.getValue("serrariaDate"),
//         status: form.getValue("radioTypesSerraria")
//     };

//     if (dadosResponsavelSerraria.nome == "") {
//         throw "Responsável pela serraria inválido.";
//     }
//     if (dadosResponsavelSerraria.data == "") {
//         throw "Data da serraria inválida.";
//     }
//     if (dadosResponsavelSerraria.status == "") {
//         throw "Status da serraria não informado.";
//     }
//     var serraria = dadosResponsavelSerraria.checkbox;
//     if (serraria.recebimentoToras == "") {
//         throw "Item 'Recebimento de toras' não marcado.";
//     }
//     if (serraria.descascamento == "") {
//         throw "Item 'Descascamento' não marcado.";
//     }
//     if (serraria.cortePrimario == "") {
//         throw "Item 'Corte primário' não marcado.";
//     }
//     if (serraria.corteSecundario == "") {
//         throw "Item 'Corte secundário' não marcado.";
//     }
//     if (serraria.inspecaoVisual == "") {
//         throw "Item 'Inspeção visual' não marcado.";
//     }
//     if (serraria.secagem == "") {
//         throw "Item 'Secagem' não marcado.";
//     }
//     if (serraria.armazem == "") {
//         throw "Item 'Armazenagem' não marcado.";
//     }
//     if (serraria.documentacao == "") {
//         throw "Item 'Documentação' não marcado.";
//     }

//     // Secagem:
//     var dadosResponsavelSecagem = {
//         checkbox: {
//             empilhamento: form.getValue("empilhamento"),
//             entradaForno: form.getValue("entradaForno"),
//             curvaSecagem: form.getValue("curvaSecagem"),
//             verifUmidade: form.getValue("verifUmidade"),
//             ausenciaRachaduras: form.getValue("ausenciaRachaduras"),
//             resfriamento: form.getValue("resfriamento")
//         },
//         nome: form.getValue("nameRespSecagem"),
//         data: form.getValue("secagemDate"),
//         status: form.getValue("radioTypesSecagem")
//     };

//     if (dadosResponsavelSecagem.nome == "") {
//         throw "Responsável pela secagem inválido.";
//     }
//     if (dadosResponsavelSecagem.data == "") {
//         throw "Data da secagem inválida.";
//     }
//     if (dadosResponsavelSecagem.status == "") {
//         throw "Status da secagem não informado.";
//     }
//     var secagem = dadosResponsavelSecagem.checkbox;
//     if (secagem.empilhamento == "") {
//         throw "Item 'Empilhamento' não marcado.";
//     }
//     if (secagem.entradaForno == "") {
//         throw "Item 'Entrada no forno' não marcado.";
//     }
//     if (secagem.curvaSecagem == "") {
//         throw "Item 'Curva de secagem' não marcado.";
//     }
//     if (secagem.verifUmidade == "") {
//         throw "Item 'Verificação de umidade' não marcado.";
//     }
//     if (secagem.ausenciaRachaduras == "") {
//         throw "Item 'Ausência de rachaduras' não marcado.";
//     }
//     if (secagem.resfriamento == "") {
//         throw "Item 'Resfriamento' não marcado.";
//     }

//     // Supervisor:
//     var dadosResponsavel = {
//         id: form.getValue("idSupervisor"),
//         name: form.getValue("nameSupervisor"),
//         status: form.getValue("radioTypesSupervisor")
//     };

//     if (dadosResponsavel.id == "") {
//         throw "ID do supervisor inválido.";
//     }
//     if (dadosResponsavel.name == "") {
//         throw "Nome do supervisor inválido.";
//     }
//     if (dadosResponsavel.status == "") {
//         throw "Status geral da inspeção não informado.";
//     }
// }
