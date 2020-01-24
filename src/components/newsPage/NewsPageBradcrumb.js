import React from "react";
import { Link } from 'gatsby'
const NewsPageBradcrumb =({cat, location})=>{
  
    return (
      <div className="site_page_header">
        
        <div className="m_container">
          <div style={{
            display: 'flex'
          }}>
            
            {
      
                    cat.map(p =>{
                    if(`${p.node.path}` == `${location.pathname}` || `${p.node.path}` == "/category/news/" ){
                    
                      return (
                        <h2 style={{
                          margin: "0 0.3em 0 0"
                        }}> 
                              <Link 
                            to={p.node.path}
                            style={{
                              color:'#4c4c4d'
                            }}
                            key={p.node.id} 
                            
                          
                            >
                            » {p.node.name}
                          </Link>
                        </h2>
                        )
                      
                      
                    }else{
                      return undefined
                    }
                    
                  })
            }
          </div>
          <div className="description" />
        </div>
      </div>
    );
  
}

export default NewsPageBradcrumb;
