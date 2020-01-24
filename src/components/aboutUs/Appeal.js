import React from "react";

class Appeal extends React.Component {
  render() {
    
    const {appeal_header, appeal_text} = this.props.data;
    // console.log(appeal_header)
    return (
      <div className="appeal">
        <div className="m_container flex">
          <div className="appeal_header">
            <h3>{appeal_header}</h3>
          </div>
          <div className="appeal_text">
            <p>
            {appeal_text}
            </p>
          </div>
        </div>
        <div className="m_container appeal_images">
          <img
            src="http://maxdenrd.beget.tech/wp-content/themes/okt/assets/img/appeal_left_img.png"
            alt="3"
            loading="lazy"
          />
          <img
            src="http://maxdenrd.beget.tech/wp-content/themes/okt/assets/img/appeal_right_img.png"
            alt="2"
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}

export default Appeal;
