import React from "react";
import call from "../../images/call.svg"

class Tel extends React.Component {
  render() {
    return (
      <div className="tel flex">
        <div>
          <img
            src={call}
            alt="call"
          />
        </div>
        <div className="tel_text">
          <a href={`tel:${this.props.telephone}`}>{this.props.telephone}</a>
        </div>
      </div>
    );
  }
}

export default Tel;
