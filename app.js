// Using Module Pattern
// Module for data privacy
// Module for BUDGET CONTROLLER
var budgetController = (function(){
    
    //

})();


// Module for UI controller
var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();



// Module for Global App controller
var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        document.addEventListener('keypress', function(event){
    
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
    
        });
    };

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UIController.getInput();

        // 2. Add the item to the budget controller

        // 3. Add new value to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('aaaa');
    }

    return {
        init: function() {
            console.log('Started');
            setupEventListners();
        }
    }

})(budgetController, UIController);

controller.init();