import React from "react";
import { Link } from 'gatsby'
const uuidInNewsPageNewsCatalog = require('uuid/v4');
const InNewsPageNewsCatalog = ({myPost})=> {
 
    return (
      <div className="news">
        <div className="flex flex-column">
          <h2
          style={{
            textAlign:"center",
            margin: "1em 0"
          }}
          >Новости</h2>
          <div
            className=" flex "
            style={{
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
          >
          {
      myPost.map(po=>{
        function compareSlug(a, b) {
          if (a.slug === "catalog" || a.slug === "news") {
            return -1
          }else{
            return 1
          }
        }
              
        
        po.node.categories.sort(compareSlug);
    
        return(
         
                    <div
                      style={{
                        width: "30%",
                        marginBottom: "2em"
                      }}
                      key={uuidInNewsPageNewsCatalog()}
                    >
                      <div className="post-thumb">
                        <img
                          src="http://localhost:8888/wp-content/uploads/2020/01/Layer_3.png"
                          alt="Layer_3"
                          loading="lazy"
                        />
                      </div>
                      <div className="post-content flex flex-column">
                        <div>
                          <span className="date">{po.node.date}</span>
                          <h2>{po.node.title}</h2>
                          <p />
                          <p >
                          
                          {po.node.descriptPost}
                          </p>
                          <p />
                        </div>
                        <div className="flex link_container">
                          <div className="arrow_next">
                            <img
                              loading="lazy"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAIBAMAAAAsHUM2AAAAAXNSR0IB2cksfwAAABVQTFRFAAAAPEs8QEo9QUs8QEo9P0k+QEs8pZPYbAAAAAd0Uk5TABG7ZsyZRK0zcUIAAAAeSURBVHicYxBgYFBmYBAxYGB0ZmAIZWANABIMCQwAFCACGwE9lmQAAAAASUVORK5CYII="
                              alt={5}
                            />
                          </div>
                          <div >
                          <Link 
                           
                            key={po.node.id} 
                            to={`${po.node.categories[1].path}${po.node.slug}`}
                          >
                             Подробнее
                          </Link>
                            
                             
                   
                          </div>
                        </div>
                      </div>
                    </div>

          
                   
          
   
           
            )
          
          
          })
    }
     </div>
          </div>
      </div>
    );
 
}

export default InNewsPageNewsCatalog;
