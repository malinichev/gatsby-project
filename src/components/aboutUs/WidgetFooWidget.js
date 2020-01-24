import React from "react";

class WidgetFooWidget extends React.Component {

    
  render() {
    const wid = this.props.wiget;
    
    // console.log(wid)

    return  (
      <>
      {
        wid.map((obj)=>{
          return(
            <div key={obj.img.id} className="foot widget widget_foo_widget" aria-expanded="false">
            <div
              className="benefits_list_item"
              id="foo_widget-3"
              aria-expanded="false"
            >
              <div className="benefits_img">
                <img
                  src={obj.img.source_url}
                  alt={obj.img.alt_text}
                />
              </div>
              <div className="benefits_text">
                <p />
                <h3 className="widget-title">{obj.text}</h3>
                <p />
              </div>
            </div>
            </div>
          )
        })
      }
  

       </> 
    
     )
  }
}

export default WidgetFooWidget;
