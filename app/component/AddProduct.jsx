var React = require("react");
var actions = require("../actions/Actions.js");


module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          category:""
      }  
    },
    addProduct:function(e){
        e.preventDefault();
		alert("hi");
        actions.addProduct(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
	  alert(state[name]);
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addProduct}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Product Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="School Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="category">Category:</label>
                    <input type="text" className="form-control" id="category" name="category" value={this.state.category} onChange={this.handleInputChange} placeholder="category" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Product</button>
                </div>
            </form>
        )
    }
})