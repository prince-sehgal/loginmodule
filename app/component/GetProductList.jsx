var React = require("react");
var AddProduct=require("./AddProduct.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="container">
		     <div className="row">
                <div className="col-md-6">
                    <AddProduct></AddProduct>
                </div>
			 </div>
			 <div className="row">
                <div className="col-md-6">
                    {
					
                        this.props.products.map(function(s,index){
                            return(
                                <div>
                                    <input type="checkbox" >
                                 
                                    </input>
                                     {s.name}
                                      {s.category}
                                      {s.price}
                                    </div>
                            ) 
                            
                            
                        })
                        
                       
                    }
                </div>
				</div>
           </div>
		   
       )
   } 
});