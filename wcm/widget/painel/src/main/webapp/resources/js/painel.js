var PainelWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'navegar-processo': ['click_navProcessos']
        },
        global: {}
    },
    navProcessos: function(){
        console.log("clickou");
    }
});

