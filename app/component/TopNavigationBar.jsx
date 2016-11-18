var React = require("react");
var ReactDOM = require('react-dom');
var LoginHomePage=require("./LoginHomePage.jsx");
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
module.exports = React.createClass({
    onLogoutClick:function(e) {
         e.preventDefault();
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
          ReactDOM.render(
              <LoginHomePage></LoginHomePage>,
            document.getElementById('app')
          );
    },
render:function(){
       return(
        <div>
			  <nav className="navbar navbar-collapse bg-faded">
                <div>
                  <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Investment</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Insurance</a>
                        </li>
                      
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                          <a className="nav-link" href="#">About</a>
                        </li> 
                      <li className="nav-item">
                          <a className="nav-link" href="#" onClick={this.onLogoutClick}>Logout</a>
                      </li>
                 </ul>
                </div>
            </nav>  
        </div>
        )
   } 
})

    