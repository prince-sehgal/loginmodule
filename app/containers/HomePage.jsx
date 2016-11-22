var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var LogoHeader=require('./../components/LogoHeader.jsx');
var NavBar=require('./../components/TopNavigationBar.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');
var Link = ReactRouter.Link;

module.exports = React.createClass({
   render:function(){
       return(
           <div>
        <div className="container">
            <div className="row">
                <div className="logoheader">
                    <LogoHeader pagename = 'mercerinsights' pagetitle='Mercer Insights' activeUser='true' userName='Prince Sehgal'/>
                </div>
            </div>
            </div>
            <div className="layer">
            <div className="main-container">
                <NavBar /> 
                Welcome. You are in home page now.
            </div>
            </div>
               <div className="container">
            <div className="row">
                <div className="navbar-fixed-bottom footer-bottom">
                    <LogoFooter />
                </div>
            </div>
            </div>
            </div>
   )} 
});