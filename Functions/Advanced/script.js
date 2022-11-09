function saturdayFun(satAction = "roller-skate"){
    return `This Saturday, I want to ${satAction}!`;
};

function mondayWork(action = "go to the office") {
    return `This Monday, I will ${action}.`;
};

function wrapAdjective(character = '*'){
    return function(woop = "special"){
        return `You are ${character}${woop}${character}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!");
wrapAdjective('%')("a dedicated programmer");

let Calculator = {
    add: function(){
            return 1 + 3
    },
    subtract: function(){
        return 1 - 3
    },
    multiply: function(){
        return 1 * 3
    },
    divide: function(){
        return 10 / 5
    },
};
let arrayOfTransforms = [
    function(a){ return a * 2},
    function(a){ return a + 1000},
    function(a){ return a % 7 }
]
function actionApplyer(a, array){
    let b = a
    for (var i = 0; i < array.length; i++){
        b = array[i](b);
        }
    return b};

actionApplyer(13, arrayOfTransforms);