/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import 'swiper/css/swiper.min.css'  //ЭТО ВАЖНО КАКОЙ !!!!!!!!!!!!!!!!!!!
import "./layout.scss"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Header from "./header/header"
import Footer from "./footer/Footer"


const Layout = ({ children, setinCatalog, inCatalog, location }) => {
  // console.log(location.pathname)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
 
  return (
    <>
    <div id="main">
      <Header 
      siteTitle={data.site.siteMetadata.title} 
      currectUrl={location}
      setinCatalog={setinCatalog} 
      inCatalog={inCatalog} 
    
      />
      
        {children}
        
          
      
      <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
