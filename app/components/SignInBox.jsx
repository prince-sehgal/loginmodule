var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

 var SignInBox= React.createClass({
    
    contextTypes: {
      router: React.PropTypes.object.isRequired  
    },
    
    getInitialState:function(){
      return {
          name:'',
          password:''
      }  
    },
    
     onUpdateUser: function(e){
         this.setState({
          name:e.target.value          
      })  
    },
    
     onUpdatePassword: function(e){
         this.setState({
          password:e.target.value          
      })  
    },

      handleSubmitUser: function(e){
      e.preventDefault();
        var name =  this.state.name;
        var password = this.state.password;
        this.context.router.push('/home/')
        this.setState({
            name: '',
            password:''
        });
    },
     
     
    render:function(){
        return(
             <div className = "form-group">
                <div className ="form-group">
                    <form onSubmit = {this.handleSubmitUser}>
                        <div className="form-group">
                                <input className ="form-control"
                                placeholder="Provide user name"
                                onChange={this.onUpdateUser}
                                value={this.props.name}
                                type = "text" />
                        </div>
                        <div className="form-group">
                                <input className ="form-control"
                                placeholder="Provide password"
                                onChange={this.onUpdatePassword}
                                value={this.props.password}
                                type = "password" />
                        </div>
                        <div className="form-group">
                                <button 
                                    className="btn btn-block btn-success"
                                    onClick = {this.props.onClickAction}
                                    type="submit">
                                   Login
                                   </button>
                        </div>            
                  </form>
                </div>
            </div>
        )
    }
});

module.exports = SignInBox;