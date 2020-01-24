import React from "react";
import WidgetFooWidget from "./WidgetFooWidget";
// import bg1 from "../../images/4Nash.svg"
class Benefits extends React.Component {
  render() {
    const{dataWid} = this.props
    // console.log(Object.values(dataWid))
   
   
   
   
      
   
  //  console.log(dataWid)
    return (
      <div className="benefits">
      
        <div className="m_container flex flex-column">
          <h2>Наши преимущества</h2>
          <div className="benefits_list flex">
            
            
            <WidgetFooWidget wiget={Object.values(dataWid)}></WidgetFooWidget>
        
         
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;
