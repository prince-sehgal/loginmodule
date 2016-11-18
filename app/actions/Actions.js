var dispatcher = require("../dispatcher");

module.exports = {
    addProduct:function(product){
        dispatcher.dispatch({
           product:product,
           type:"product:addProduct" 
        });
    },
    deleteProduct:function(product){
        dispatcher.dispatch({
           product:product,
           type:"school:deleteProduct" 
        });
    }
}