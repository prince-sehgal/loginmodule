var React = require('react');
var ReactDOM = require('react-dom');



var CommentBox = React.createClass({
  getInitialState: function() {
    return {Employer: '',EmployeeName:'',Designation:'',Age:''};
  },
 handleClick: function() {
    // Explicitly focus the text input using the raw DOM API.
   var elm=this.refs.inputEmployerName;
     this.setState({Employer: elm.value,EmployeeName:this.refs.inputEmployeeName.value});
   
  },
  render: function() {
    // The ref attribute is a callback that saves a reference to the
    // component to this.myTextInput when the component is mounted.
    return (
      <div class="table-responsive">
        <table class="table">
            <tr class="row"><td class="col-sm-4">
                Employer Name
                </td><td class="col-sm-4">
                <input type="text" ref="inputEmployerName" />
                </td></tr>
         <tr class="row"><td class="col-sm-4">
                Employee Name
                </td><td class="col-sm-4">
                <input type="text" ref="inputEmployeeName" />
                </td></tr>
        <tr class="row"><td class="col-sm-4">
                Designation
                </td><td class="col-sm-4">
                <input type="text" ref="inputDesignation" />
                </td></tr>
             <tr class="row"><td class="col-sm-4">
                Age
                </td><td class="col-sm-4">
                <input type="text" ref="inputAge" />
                </td></tr>
            
      <tr class="row"><td class="col-sm-4">
                
                </td><td class="col-sm-4">
               <input
          type="button"
          value="Display Value"
          onClick={this.handleClick} ></input>
                </td></tr>
        
       
        <div ref="showtext">Employer : {this.state.Employer}<br></br>
            Employee : {this.state.EmployeeName}
            </div>
        </table>
      </div>
    );
  }
});

ReactDOM.render(<CommentBox ></CommentBox>, app);
    

