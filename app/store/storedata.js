var dispatcher = require("../dispatcher");

function ProductStore() {
   
    var listeners = [];
   var products = [
  {category: 'Sporting Goods', price: '$49.99',  name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99',  name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99',  name: 'Basketball'},
  {category: 'Electronics', price: '$99.99',  name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99',  name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99',  name: 'Nexus 7'}
];

    alert("hi");
    function getProduct() {
        
        return products;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addProduct(product) {
        products.push(product)
        triggerListeners();
    }

    function deleteProduct(product) {
        var _index;
        products.map(function (s, index) {
            if (s.name === product.name) {
                _index = index;
            }
        });
        products.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(products);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "product") {
            switch (split[1]) {
                case "addProduct":
                    addProduct(payload.product);
                    break;
                case "deleteProduct":
                    deleteProduct(payload.product);
                    break;
            }
        }
    });

    return {
        getProduct: getProduct,
        onChange: onChange
    }
}

module.exports = ProductStore();