var React = require("react");
var ReactDOM = require('react-dom');
var HomePage=require("./HomePage.jsx");
var ErrorPage=require("./ErrorPage.jsx");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          password:""
      }  
    },
     onChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    
    onClick:function(e){
        e.preventDefault();
        var user = this.state.name;
        var password = this.state.password;
        this.onLogin(user,password);
    },
   onLogin:function(user,password)
    {
       if(user.toUpperCase()=='GURU' && password=='1234')
           {
               this.showHomePage();
           }
        else
            {
                
               this.loginFail('Invalid login');
            }
    },
     showHomePage:function() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
          ReactDOM.render(
            <HomePage />,
            document.getElementById('app')
          );
    },
    loginFail:function(message) {
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
      ReactDOM.render(
        <ErrorPage ErrorMessage= {message} />,
        document.getElementById('app')
      );

    },
    render:function(){
        return(
            <form className="form well signInBox">
                <div className="form-group">
                    <label className="control-label" htmlFor="name">User Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.onChange} />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="category"  >Password:</label>
                    <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.onChange} />                    
                </div>
                <div className="form-group">
                    <button className="btn-primary" type="submit" onClick={this.onClick} >Log In</button>
                </div>
            </form>
              
        )
    }
})