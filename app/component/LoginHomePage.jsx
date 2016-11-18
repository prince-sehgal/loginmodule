var React = require("react");
var ReactDOM = require('react-dom');
var SignInBox=require("./SignInBox.jsx");
var LogoHeader=require("./LogoHeader.jsx");
var LogoFooter=require("./LogoFooter.jsx");
var SignInBoxHeader=require("./SignInBoxHeader.jsx");

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
                <div className="col-sm-9">
                    
                </div>
                 <div className="col-sm-3">
                     <SignInBoxHeader></SignInBoxHeader>
                     <SignInBox></SignInBox>
                </div>
                 
			 </div>
            <div className="row">
                <div className="navbar-fixed-bottom footer-bottom">
                    <LogoFooter></LogoFooter>
                </div>
            </div>
           </div>
		   
       )
   } 
});