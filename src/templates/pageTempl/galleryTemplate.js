import React from "react"
import Layout from "../../components/layout"
import GalleryOFphotos from "../../components/gallery/galleryOFphotos.js"
import GalleryOFvideo from "../../components/gallery/galleryOFvideo.js"
import { graphql } from 'gatsby'
const GalleryTemplate = ({location, data}) => {
  // console.log(data)
  return(
  
        <Layout location={location}>
          
          <GalleryOFphotos photoData={data}/>
          <GalleryOFvideo videoUrl={data}/>
        </Layout>
   
  )
  
}
export const query = graphql`
  query Wersddfssdy($slugPage: String) {
    
      allWordpressPage(filter: {slug: {eq: $slugPage}}) {
        edges {
          node {
            acf {
              picturesGallery
              video {
                urls
              }
            }
        
          }
        }
      }
  }
`
export default GalleryTemplate