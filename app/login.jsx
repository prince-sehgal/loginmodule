"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LoginHomePage=require("./component/LoginHomePage.jsx");

let dispatcher = require('./dispatcher.js');
let GroceryItemList = require('./components/GroceryItemList.jsx');
let GroceryItemStore = require('./stores/GroceryItemStore.jsx');

// var items = GroceryItemStore.getGroceryItems();

// GroceryItemStore.onChange(()=>{
// 	items = GroceryItemStore.getGroceryItems();
// 	render();
// })
// function render(){
// 	React.render(<GroceryItemList items={items}/>,mount);
// }


ReactDOM.render(
  <LoginHomePage></LoginHomePage>,
  document.getElementById('app')
)