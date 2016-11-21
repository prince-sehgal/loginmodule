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
    
     handleUpdateUser: function(e){
         this.setState({
          name:e.target.value          
      })  
    },
    
     handleUpdatePassword: function(e){
         this.setState({
          password:e.target.value          
      })  
    },
    
      handleSubmitUser: function(e){
     e.preventDefault(); 
        var name =  this.state.name;
        this.setState({
            name: ''
        });
        this.context.router.push('/home/')
    },
     
     
    render:function(){
        return(
             <div className = "form-group">
                <div className ="form-group">
                    <form onSubmit = {this.handleSubmitUser}>
                        <div className="form-group">
                                <input className ="form-control"
                                placeholder="Provide user name"
                                onChange={this.props.onUpdateUser}
                                value={this.props.name}
                                type = "text" />
                        </div>
                        <div className="form-group">
                                <input className ="form-control"
                                placeholder="Provide password"
                                onChange={this.props.onUpdatePassword}
                                value={this.props.password}
                                type = "text" />
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