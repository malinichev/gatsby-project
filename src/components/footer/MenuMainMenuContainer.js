import React from "react"
import { StaticQuery, graphql, Link} from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query myFooter {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              id
              items {
                title
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="menu-main_menu-container">
      <ul id="main_menu" className="menu flex-row-reverse">
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map((e)=>{
            
          
              return (
                <li
                key={e.url}
                className="menu-item menu-item-type-custom menu-item-object-custom" 
                >
                  <Link to={`${e.url}`} aria-current="page">{e.title}</Link>
                </li>
                
                );
            
          })
        }
          
          </ul>
      </div>
      
    )}
  />
)




