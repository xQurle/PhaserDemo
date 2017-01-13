demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#33cc33';
        console.log('state2');
        
        addChangeStateEventListeners();
    },
    update: function(){}
};