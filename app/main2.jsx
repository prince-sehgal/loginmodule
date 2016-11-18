var React = require('react');
var ReactDOM = require('react-dom');
var FilterableProductTable=require("./component/GetProductList.jsx");
var productStore=require("./store/storedata.js");


var _products=productStore.getProduct();
productStore.onChange(function(products){
	alert(products.length);
    __products=products;
	alert(__products.length);
    render();
});

function render(){
ReactDOM.render(
  <FilterableProductTable products={_products} />,
  document.getElementById('app')
);
}
render();