
import React from "react"
import { Link } from 'gatsby'

const CategoriesListIncatalogPage = ({cat, location}) => 
{
  // console.log(data)

return (

  <div className="news_categories">
        {
        cat.map(p =>{
          if(`${p.node.path.match(/category\/catalog/g)}`==="category/catalog" && `${p.node.path}` !== `${location.pathname}` && `${p.node.path}` !== `${location.pathname}` ){
           
            return (
            <Link 
              to={p.node.path}
              style={{
                background:
                  `url(${p.node.acf.categoryPic.source_url}) center center / cover no-repeat, rgba(0, 170, 238, 0.9)`
                  
              }}
              key={p.node.id} 
              title="\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"       
              >
             
          
          <div
            className="category_item"
            style={{
              background: "rgba(189, 182, 182, 0.60)"
            }}
          >
            <h3
              style={{
                color: "white"
              }}
              className="title"
            >
             {p.node.name}
            </h3>
            <p
              style={{
                color: "white"
              }}
              className="description"
            >
              {p.node.description} 
            </p>
          </div>
       
            </Link>)
            
            
          }else{
            return undefined
          }
          
        })
        }
       
       
      </div>
)
}

export default CategoriesListIncatalogPage


