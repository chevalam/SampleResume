var React = require('react');
var {Link} = require('react-router');

var Navigation = React.createClass({
  render: function(){
    return (
      <div className="top-bar">
      <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">
          Curriculum Vitae
        </li>
        <li>
            <Link to="/">Experience</Link>
        </li>
        <li>
            <Link to="/Qualifications">Qualifications</Link>
        </li>
        <li>
            <Link to="/">Proficiency</Link>
        </li>
        <li>
            <Link to="/">Contact Details</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
  <ul className="menu">
    <li className="menu-text">
      <a href="https://www.linkedin.com/in/srikanth-chevalam-32071b7/" target="_blank">Srikanth Chevalam</a>
    </li>
  </ul>
</div>
      </div>
     );
  }
});

module.exports = Navigation;
