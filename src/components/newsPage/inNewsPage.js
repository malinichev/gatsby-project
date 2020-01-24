
import React, { useState }  from "react"
// import Layout from "../layout"
import { Link } from 'gatsby'
import NewsPageBradcrumb from "./NewsPageBradcrumb"
import InNewsPageCategoriesList from "./InNewsPageCategoriesList"
import InNewsPageNewsCatalog from "./InNewsPageNewsCatalog"

const InNewsPage =({cat, myPost, location})=>{
  
 
 
  return(
    <>
    
    <NewsPageBradcrumb cat={cat} location={location}/>
    <InNewsPageCategoriesList cat={cat} location={location}/>
    <InNewsPageNewsCatalog myPost={myPost}/>
    
  
  
  </>
  );
}

export default InNewsPage





  
