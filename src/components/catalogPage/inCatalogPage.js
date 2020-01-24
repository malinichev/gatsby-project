
import React, { useState }  from "react"
// import Layout from "../layout"
import { Link } from 'gatsby'
import CatalogPageBradcrumb from "./catalogPageBradcrumb"
import FormSearchInCatalogPage from "./FormSearchInCatalogPage"
import CategoriesListIncatalogPage from "./CategoriesListIncatalogPage"
import CatalogProduct from "./CatalogProduct"
const InCatalogPage =({cat, myPost, location})=>{
  
  const [searchTerm, setSearchTerm] = useState(""); //фильтр
  
  const handleChange = event => {
  
    setSearchTerm(event.target.value);

  };
 
  return(
  <>
    <CatalogPageBradcrumb cat={cat} location={location}/>
    <FormSearchInCatalogPage handleChange={handleChange} searchTerm={searchTerm}/>
    <CategoriesListIncatalogPage  cat={cat} location={location}/>
    <CatalogProduct myPost={myPost} searchTerm={searchTerm}/>
  </>
  );
}

export default InCatalogPage
