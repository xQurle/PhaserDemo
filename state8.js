demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#3366ff';
        
        addChangeStateEventListeners();
    },
    update: function(){}
};