demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#cc6699';
        
        addChangeStateEventListeners();
    },
    update: function(){}
};