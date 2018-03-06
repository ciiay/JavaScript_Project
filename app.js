// Module Pattern 
// Module for data privacy
// Module for BUDGET CONTROLLER
var budgetController = (function(){
    
    //

})();


// Module for UI controller
var UIController = (function(){
    
    // code here

})();



// Module for Global App controller
var controller = (function(budgetCtrl, UICtrl){
    
    var ctrlAddItem = function() {

        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add new value to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('aaaa');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    })

})(budgetController, UIController);
