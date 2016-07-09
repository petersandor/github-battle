

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// Bundle Bootstrap CSS
require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(routes, document.getElementById('app'));
