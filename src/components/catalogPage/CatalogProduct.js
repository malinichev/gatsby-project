
import React from "react"
// import Layout from "../layout"
import { Link } from 'gatsby'
import plus from "../../images/bx-plus.png"
const uuidv4 = require('uuid/v4');
const CatalogProduct = ({myPost, searchTerm}) => 
{
  
  if(myPost[0] === undefined){

   
    return (
      <div
      style={{
        textAlign: "center"
      }}
      >
        <h2>В этой категории продуктов нет!</h2>
      </div>
    
    
      )
    
    }
return (
  <div className="catalog">
    
        <div className="flex flex-column">
          <h2>Наши продукты</h2>
          <div className="catalog_items flex flex-center">
          {
                myPost.map(po=>{

              

                    if(
                        po.node.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 //фильтр по словам
                        
                          //фильтр по катгории
                      ){  
                      
                        // console.log(locat)
                      return(
                        <div key={uuidv4()}>
                          <Link 
                          style={{
                            padding: "0 10px"
                          }} 
                           
                          to={`${po.node.categories[1].path}${po.node.slug}`}
                     
                        >
                         
                          <div
                            className="catalog_item_container"
                            title="\u0413\u043E\u0440\u0442\u0435\u043D\u0437\u0438\u044F"
                            style={{
                             
                            }}
                          >
                            <div
                              className="catalog_item"
                              // acf {
                              //   descProdPost
                              //   imgProdPost
                              // }
                              style={{
                                background:
                                  `url(${po.node.acf.imgProdPost}) center center / cover no-repeat`,
                                  position:"relative"
                              }}
                            >
                              <div className="img-overlay"
                              style={{
                                // margin: "0 10px"
                              }}>
                                <div className="overlay_button">
                                  <img
                                    src={plus}
                                    alt="plus"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        
                          
                        
                        <h3>{po.node.title}</h3>
                      </div>
            
                      )
                    }else{
                      return undefined
                     
                    }
                    
                  })
            }
           
            
          </div>
        </div>
      </div>
)
}

export default CatalogProduct


