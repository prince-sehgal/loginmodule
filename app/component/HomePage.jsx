var React = require("react");
var ReactDOM = require('react-dom');
var LogoHeader=require("./LogoHeader.jsx");
var LogoFooter=require("./LogoFooter.jsx");
var NavBar=require("./TopNavigationBar.jsx");

module.exports = React.createClass({
   render:function(){
       return(
         <div className="container">
            <div className="row">
                <div className="logoheader">
                    <LogoHeader></LogoHeader>
                </div>
            </div>
            <div className="row">
                <NavBar></NavBar>   
            </div>
            
            <div className="row">
                <div className="navbar-fixed-bottom footer-bottom">
                    <LogoFooter></LogoFooter>
                </div>
            </div>
           </div>
   )} 
});