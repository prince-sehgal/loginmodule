var React = require('react');
var SignInBox = require('./SignInBox.jsx');
module.exports = React.createClass({
   render:function(){
       return(
         <form className="form well signInHeader">
               <div>
                   <p><b>Sign In To Your Account</b></p>
                   
               </div>
            </form>
       )
   } 
});