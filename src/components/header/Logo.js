import React from "react";
import logo from "../../images/logo-2.svg"
class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <a
          title="mySite"
          href="/"
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "227px",
              height: "80px"
            }}
          />
        </a>
      </div>
    );
  }
}

export default Logo;
