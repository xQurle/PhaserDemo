demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#336699';
        console.log('state9');
        
        addChangeStateEventListeners();
    },
    update: function(){}
};