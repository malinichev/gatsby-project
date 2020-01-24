import React, { useState } from "react"
import { useStaticQuery, graphql, Link} from "gatsby"

const NavCollapseMainmenu = ({currectUrl, inCatalog}) => {
 
  // console.log(inCatalog)
  const myMenuQuery = useStaticQuery(graphql`
  query Headery {
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
`);

  let myMenu = myMenuQuery.allWordpressWpApiMenusMenusItems.edges;

  const [myslocation, setMylocation] = useState(currectUrl.pathname);

  
  return (
 
    <nav className="nav-collapse">
        <ul id="main_menu" className="menu mb-0">

        {myMenu[0].node.items.map((e)=>{
         
           
            let catal= false; 
            let newst = false;
            // console.log(e.url)
            if(myslocation.match(/^\/category\/catalog/)!==null ){
              catal = myslocation.match(/^\/category\/catalog/).toString() == e.url.toString() ? true: false;
            }else if(myslocation.match(/^\/category\/news/)!==null){
              newst = myslocation.match(/^\/category\/news/).toString() == e.url.toString() ? true: false;
            }
            // console.log(catal)
            // console.log(newst)
            if(
              e.url == myslocation 
              ||
              catal 
              ||
              newst
              ){
              return (
              <li
              key={e.title}
              className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item"
              >
                <Link to={`${e.url}`} aria-current="page" 

                >{e.title}</Link>
                
              </li>
              
              );
            }else {
              return (
                <li
                key={e.title}
                className="menu-item menu-item-type-custom menu-item-object-custom current_page_item"
                >
                  <Link to={`${e.url}`} aria-current="page">{e.title}</Link>
                  
                </li>
                
                );
            }
          
        })}
        </ul>
      </nav>
     
  );
}

export default NavCollapseMainmenu;