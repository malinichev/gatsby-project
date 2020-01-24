
import React from "react"
// import Layout from "../layout"
import { Link } from 'gatsby'
const CatalogPageBradcrumb = ({cat, location}) => 
{
  // console.log(data)
return (
<div className="site_page_header">

  <div className="m_container">
    <div className="appeal_header">
    {
        cat.map(p =>{
          if(`${p.node.path}` == `${location.pathname}` || `${p.node.path}` == "/category/catalog/" ){
            // setlocat("/category/catalog")
            
            return (
              
            <Link 
              to={p.node.path}
              
              key={p.node.id} 
                     
              >
              <h2> » {p.node.name}</h2>
            </Link>)
            
            
          }else{
            return undefined
          }
          
        })
        }
      
    </div>
    <div className="description" />
  </div>
</div>
)
}

export default CatalogPageBradcrumb





