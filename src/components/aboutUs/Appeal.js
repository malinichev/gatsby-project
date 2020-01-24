import React from "react";
import aphelRight from "../../images/aphel-right.svg";
import aphelLeft from "../../images/aphel-left.svg";


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
            src={aphelLeft}
            alt="3"
            loading="lazy"
          />
          <img
            src={aphelRight}
            alt="2"
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}

export default Appeal;
