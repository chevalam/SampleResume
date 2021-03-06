var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Qualifications = require('Qualifications');
var Proficiency = require('Proficiency');
var Experience = require('Experience');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//Load application styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
   <Router history={hashHistory}>
     <Route path="/" component={Main}>
       <Route path="Qualifications" component={Qualifications}></Route>
       <Route path="Proficiency" component={Proficiency}></Route>
       <IndexRoute components={Experience} />
     </Route>
   </Router>,
  document.getElementById('app')
);
