var React = require('react');
var ReactDOM = require('react-dom');
var SignInBoxHeader=require('./../components/SignInBoxHeader.jsx');
var SignInBox=require('./../components/SignInBox.jsx');
var LogoHeader=require('./../components/LogoHeader.jsx');
var LogoFooter=require('./../components/LogoFooter.jsx');


module.exports = React.createClass({
   render:function(){
       return(
           <div className="container">
            <div className="row">
                <div className="logoheader">
                    <LogoHeader pagename = 'mercerinsights' pagetitle='Mercer Insights'/>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm-9">
                    
                </div>
                 <div className="col-sm-3">
                     <SignInBoxHeader />
                     <div>
                         <SignInBox />
                     </div>
                     
                </div>
                 
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

