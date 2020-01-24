import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import SliderContent from "../../components/aboutUs/SliderContent"
import Appeal from "../../components/aboutUs/Appeal"
import NewsSlider from "../../components/aboutUs/NewsSlider"
import Benefits from "../../components/aboutUs/Benefits"
import CatalogPicOnAbout from "../../components/aboutUs/CatalogPicOnAbout"
import Mapp from "../../components/aboutUs/footerMap"


const AboutUsTemplate = ({data, pageContext, location}) => {
  
  const pageData = data.allWordpressPage.edges[0].node;
//  console.log(data)

  return(

  <Layout location={location}>

    <SliderContent/>
    <Appeal data={pageData.acf}  />
    <NewsSlider />
    <Benefits dataWid={pageData.acf.widgets}/>
    <CatalogPicOnAbout categListPath={data.allWordpressCategory.edges}/>
    <Mapp />
  </Layout>
  );
}

export const query = graphql`
  query HomePageQuery($path: String) {
    allWordpressPage(filter: {path: {eq: $path}}) {
      edges {
        node {
          id
          path
          status
          template
          slug
          acf {
            appeal_text
            appeal_header
            widgets {
              widget1 {
                text
                img {
                  source_url
                  id
                }
              }
              widget2 {
                text
                img {
                  source_url
                  id
                }
              }
              widget3 {
                text
                img {
                  source_url
                  id
                }
              }
            }
          }
        }
      }
    }

    allWordpressCategory(filter: {path: {regex: "/category/i"}}) {
      edges {
        node {
          path
          id
          name
          acf {
            categoryPic {
              alt_text
              source_url
              id
            }
          }
        }
      }
    }
   
}
`
export default AboutUsTemplate

