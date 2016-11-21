var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('./../components/main.jsx');
var LoginHome = require('./../containers/LoginHomePage.jsx');
var Home = require('./../containers/HomePage.jsx');
var Profile = require('./../containers/projectProfile.jsx');
var Tracker = require('./../containers/projectTracker.jsx');
var About = require('./../containers/aboutUS.jsx');

var routes = (
    <Router history = {hashHistory}>
        <Route path = '/' component={Main}>
            <IndexRoute component ={LoginHome}/>
            <Route path='home' header ="home" component ={Home} /> 
            <Route path='profile' header ="profile" component ={Profile} /> 
            <Route path='tracker' header ="tracker" component ={Tracker} /> 
            <Route path='about' header ="about" component ={About} />           
        </Route>
    </Router>
);

module.exports = routes;