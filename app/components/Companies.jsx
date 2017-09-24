var React = require('react');
var Experience = React.createClass({
  render: function(){
    return (<div className="row small-up-2 medium-up-3 large-up-5 align-center">
    <div id="experience" className="column medium-4">
        <div className="card">
          <div className="card-section">
            <p style={{fontWeight:'bold'}}>Visteon<br/>(August'16 – Jan'18) </p>
            <p> Chromium UI fraemwork developer.
               Development of Phoenix Web run time based Invehicle infotainment system using Chromium UI.Development involves use of Javascript,React and NodeJs<br/>
            Languages:
            C++, Blink, React,NodeJs<br/>
          Platform:Linux,QNX</p>
          </div>
          </div>
          </div>

    <div id="experience" className="column medium-4">
        <div className="card">
          <div className="card-section">
            <p style={{fontWeight:'bold'}}>Samsung Research India,Bangalore<br/>(June'12 – August'16) </p>
            <p> Optimization of Browser graphics for OpenGLES backend<br/>
            <em>Languages</em>:
            OpenGL ES , WebGL , C++, Skia, Cairo , Blink , Webkit<br/>
          <em>Platform:Linux</em></p>
          </div>
          </div>
          </div>

    <div id="experience" className="column medium-4">
          <div className="card">
            <div className="card-section">
              <p style={{fontWeight:'bold'}}>Nokia India Pvt Ltd<br/>(Feb'08 – June'12) </p>
              <p>
              Development and maintenance of SVGEngine which is a graphics provider for third party and middle layer applications on Symbian platform.
              This involved rewiring of the existing architecture to use hardware and software drivers based on performance and power considerations.<br/>
              Languages:C++,Openvg , EGL<br/>
              Platform:Symbian</p>
            </div>
          </div>
          </div>

          <div id="experience" className="column medium-4">
                <div className="card">
                  <div className="card-section">
                    <p style={{fontWeight:'bold'}}>Wipro<br/>(July'05 – Feb'08) </p>
                    <p>
                      Feature enhancements and Maintenance activities of Peripheral Interface Module which interfaces between Cisco ACD(Automatic Call Distributor)
                      and Cisco's ICM software.<br/>
                    ACDs: Avaya,Aspect.<br/>
                  Language:C++, Rational ClearCase<br/>
                Environment:Windows</p>
                  </div>
                </div>
                </div>
    </div>);
  }
});

module.exports = Experience;
