function CoffeeMachine(cmPower, cmCapacity){
    var cm = this,
        cmWaterCur,
        cmTimer,
        cmStatus = false;
    function cmBoilCalc(){
        return cmWaterCur * 4200 * 80 /cmPower;
    };
    
    function cmReady(){
        cmStatus = false;
        alert('Кофе готов');
    };
    
    this.run = function(){
        if(!cmStatus) {
            cmTimer = setTimeout(cmReady, cmBoilCalc());
            cmStatus = true;
            return true;
        } else return false;
    };
    
    this.stop = function (){
        if(cmStatus){
            clearTimeout(cmTimer);
            cmStatus = false;
            alert ('Приготовление кофе отменено');
            return true
        } else return false;
    };
    
    this.addWater = function(water){
        if (water===undefined) return cmWaterCur;
        else if(+water >0 && +water <= cmCapacity) {
            cmWaterCur=water;
            return true;
        }
        else{
            alert('Некорректный объем воды');
            return false
        }
    };
};

var cm1 = new CoffeeMachine(50000, 2000);

(function($){
    $(document).ready(function(){
        $('#power').wrapInner('<span>''</span>')
        $('button#run').on('click', function(){
            cm1.run();
        });
        $('button#stop').on('click', function(){
            cm1.stop();
        });
    })
})(jQuery);

/*cm1.addWater(1000);

cm1.run();

setTimeout(function(){
    cm1.stop();
}, 2000);*/
