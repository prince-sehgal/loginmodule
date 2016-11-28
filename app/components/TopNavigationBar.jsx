var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var topNavigationBar = React.createClass({
    render:function(){
       return(
        <div>
			  <nav className="navbar navbar-collapse bg-faded">
                <div>
                  <ul className="nav navbar-nav navbar-left">
                        <li className="nav-item">
                                 <Link  className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Project-Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todolist">Project-ToDo-List</Link>
                        </li>           
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About-Us</Link>
                        </li> 
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Logout</Link>
                      </li>
                 </ul>
                </div>
            </nav>  
        </div>
        )
   } 
});

module.exports =topNavigationBar;

    