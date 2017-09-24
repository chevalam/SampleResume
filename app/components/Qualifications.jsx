var React = require('react');
var {Link} = require('react-router');

var Qualifications = React.createClass({
  render: function(){
    return(
      <div className="row align-center">
<div className="column large-6">
    <div className="card">
      <div id="experience" className="card-section">
        <img src="http://www.bits-pilani.ac.in/Uploads/Campus/BITS_university_logo.gif"/>
        <p style={{fontWeight:'bold'}}>Masters (Software Systems): (2010-12)<br/> CGPA: 7.02.</p>
      </div>
      </div>
      </div>

<div className="column large-5">
      <div className="card">
        <div id="experience" className="card-section">
          <img src="http://andhrauniversity.edu.in/webnew/images/au/logo.png"/>
          <p style={{fontWeight:'bold'}}>Bachelor of Engineering (ECE): (2001-05)<br/>PA: 79.8% </p>
        </div>
      </div>
      </div>


      </div>
    );
  }
});
module.exports = Qualifications;
