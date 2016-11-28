let mongoose = require('mongoose');
let GroceryItem = require('./models/GroceryItem.js');

mongoose.connection.db.dropDatabase();

var initial = [{
	name:"Login Page"
},{
	name:"Home Page"
},{
	name:"Backend Connect",
	purchased:true
},{
	name:"First Component"
}];

initial.forEach(function(item){
	new GroceryItem(item).save();
});
