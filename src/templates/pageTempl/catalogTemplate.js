import React, { useState }  from "react"
import Layout from "../../components/layout"
import InCatalogPage from "../../components/catalogPage/inCatalogPage"
import InNewsPage from "../../components/newsPage/inNewsPage"
import { graphql, Link } from 'gatsby'

const CatalogTemplate = ({location, data}) => {
  // pageContext
  let posts = data.allWordpressPost.edges;
  let cat = data.allWordpressCategory.edges;
  
  const [myPost, setmyPost] = useState(posts);
  const [inCatalog, setinCatalog] = useState(false);
  


const CatalogORnewsSelect = ()=>{
   
    if(location.pathname.split("/")[2]==='catalog'){
     // location.pathname
     
     return (
      <>
      <InCatalogPage cat={cat} myPost={myPost}  location={location} />
      </>
       );
    }
    else if(location.pathname.split("/")[2]==='news'){
 
     return (
      
       <>
     <InNewsPage cat={cat} myPost={myPost}  location={location} />  
       </>
 
     )
     
   }else{
     return <span></span>
   }
}//end CatalogORnewsSelect

 


   //чтоб подсвечивалась категория




//Основной вывод на экран
// console.log(inCatalog)
return (
  <>
    <Layout location={location} setinCatalog={setinCatalog} inCatalog={inCatalog}>
     
      <CatalogORnewsSelect setinCatalog={setinCatalog} inCatalog={inCatalog}/>   
    </Layout>
  </>
  );
}






export const query = graphql`
  query CatalogQuery ($catPath: String) {
    site {
      siteMetadata {
        description
      }
    }
    allWordpressPost(filter: {categories: {elemMatch: {path: {eq: $catPath}}}}) {
      edges {
        node {
          id
          path
          title
          slug
          date(formatString: "DD.MM.YYYY")
          acf {
            descProdPost
            imgProdPost
          }
          categories {
            path
            slug
          }
        }
      }
    }
    allWordpressCategory(filter: {path: {}}) {
      edges {
        node {
          path
          name
          id
          description
          acf {
            categoryPic {
              alt_text
              source_url
            }
          }
        }
      }
    }
  }
`

export default CatalogTemplate