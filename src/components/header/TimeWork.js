import React from "react";
import clockwise from "../../images/clockwise.svg"
class TimeWork extends React.Component {
  render() {
   
    return (
      <div className="time_work flex">
        <div>
          <img
            src={clockwise}
            alt="clockwise"
          />
        </div>
        <div className="flex flex-column time_work_text">
          <div>Время работы:</div>
          <div>{this.props.workTime}</div>
        </div>
      </div>
    );
  }
}

export default TimeWork;
