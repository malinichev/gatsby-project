import React from "react";

class FooterInfo extends React.Component {
  render() {
    return (
      <div className="footer_info">
        <div className="tel_text">
          <a href="tel:8 800 250-49-93">8 800 250-49-93</a>
        </div>
        <div className="top_btn">
          <a href="#ex1" rel="modal:open">
            Бесплатный звонок
          </a>
        </div>
        <div className="colibri flex">
          Разработка и дизайн <a href="/">Колибри</a>
        </div>
      </div>
    );
  }
}

export default FooterInfo;
