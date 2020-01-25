import React from "react";
import logo from "../../images/logo-2.svg";

class FooterLogo extends React.Component {
  render() {
    return (
      <div className="footer_logo flex flex-column">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            loading="lazy" 
            style={{
              width: "227px",
              height: "80px"
            }}
          />
        </a>
        <span>© 2019 Октябрьский. Садовый центр</span>
      </div>
    );
  }
}

export default FooterLogo;
