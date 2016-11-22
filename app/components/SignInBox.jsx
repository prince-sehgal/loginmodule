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
var mongoose = require('mongoose'); 
// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://localhost:27017/showcase', function (error) {
    if (error) {
        console.log(error);
    }
});

var Schema = mongoose.Schema;
var loginSchema =new Schema({
    uid: Integer,
    name: String,
    username: String,
    password: String,
    emailid: String,
    status: String
});

// Mongoose Model definition
var loginData = mongoose.model('showcase',loginSchema);

        var name =  this.state.name;
        var password = this.state.password;
loginData.find({}, function (err, docs) {
    console.log(docs);
    });
        // this.context.router.push('/home/')
        // this.setState({
        //     name: '',
        //     password:''
        // });
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