var React = require('react');
var ReactDOM = require('react-dom');
var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');
var ToDoList=require('./../components/ToDoList.jsx');
var AddToDo = require('./../components/AddToDo.jsx');

var dispatcher = require('./../dispatcher.js');
var GroceryItemStore = require('./../stores/GroceryItemStore.jsx');

var items1 = GroceryItemStore.getGroceryItems();

GroceryItemStore.onChange(()=>{
	items = GroceryItemStore.getGroceryItems();
	//render();
})
// function render(){
// 	React.render(<ToDoList items={items1}/>,mount);
// }


var items = [{
	name:"Login Page"
},{
	name:"Home Page"
},{
	name:"Backend Connect",
	purchased:true
},{
	name:"First Component"
}];
module.exports = React.createClass({
   render:function(){
       return(
           <div className="container">
                <div className="row">
                    <div className="logoheader">
                        <LogoHeader pagename = 'mercerinsights'/>
                    </div>
                </div>
                <div className="row">
                    <div>    
                        <NavBar />
                    </div>
		{items.map((item,index)=>{
					return (
						<ToDoList item={item} key={"item"+index} />
					)
				})}

<AddToDo/>
                </div>                      
                <div className="row">
                    <div className="navbar-fixed-bottom footer-bottom">
                        <LogoFooter />
                    </div>
                </div>
           </div>
		   
       )
   } 
});

