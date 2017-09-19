var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
      <div>
        <div>
          <Navigation />
      <div>
        <ul className="menu">
          <li className="menu-text">
          Qualified IT professional with 10 years of experience, currently working as a Technical Lead with
Samsung , Bangalore
</li>
<br/>
      <li className="menu-text">
 Have extensive technical expertise with respect to the professional exposure in projects/ technology
implementation as part of professional involvement
</li>
<br/>
      <li className="menu-text">
 Expertise in optimization of browser graphics technologies like OpenGL ES,Cairo and Skia.
</li>
<br/>
      <li className="menu-text">
 Expertise in developing Object oriented software using C++, with exposure in Design Patterns
,Algorithms and Data Structures
</li>
<br/>
      <li className="menu-text">
 Experience in Agile Methodology with experience as a Scrum master.
</li>
<br/>
      <li className="menu-text">
 Expertise in Mobile Application Development, User Interface design and implementation , Client
Server Architecture Implementation, OpenGLES , Openvg , OpenCL , EGL implementations ,Call
Processing, Contact Center Products (ICM, Cisco Systems)
</li>
<br/> 
        </ul>
        {props.children}
      </div>
    </div>
    </div>
  )
}
module.exports = Main;
