var React = require('react');
var ReactDOM = require('react-dom');
var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');

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
                Know about us!!! We are also trying to figure out who we are. :)
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

