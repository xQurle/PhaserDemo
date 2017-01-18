demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#33cc33';
        
        addChangeStateEventListeners();
    },
    update: function(){}
};