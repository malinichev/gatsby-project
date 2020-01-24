import React from "react";
import bxplus from "../../images/bx-plus.png";
import {Link} from "gatsby"

const CatalogPicOnAbout = ({categListPath}) => {
  // let result = str.match(/Java(Script)/g);

  return(
    <div className="catalog">
    <div className="flex flex-column">
      <h2>Каталог</h2>
      <div className="catalog_items flex flex-center">

        {

        categListPath.map(el=>{
          
          if(el.node.path.match(/catalog/g) && el.node.path !== "/category/catalog/"){
            // console.log(el.node.path == "/category/catalog/")
            return (
              <Link key={el.node.id} to={`${el.node.path}`}>
                  <div
                    className="catalog_item_container"
                    title={el.node.name}
                  >
                    <div
                      className="catalog_item"
                      style={{
                        background: `url(${el.node.acf.categoryPic.source_url})`
                      }}
                    >
                      <div className="img-overlay">
                        <div className="overlay_button">
                          <img
                            src={bxplus}
                            alt="plus"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              </Link>
             );
           }else{
             return undefined
           }
         
           

        

        })
        }
        


      </div>
      <br />
      <div className="top_btn">
      <Link to="/category/catalog">Все категории</Link>
        
      </div>
    </div>
  </div>
  );
}
export default CatalogPicOnAbout



