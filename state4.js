demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffcc00';
        
        addChangeStateEventListeners();
    },
    update: function(){}
};