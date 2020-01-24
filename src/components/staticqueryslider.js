import { useStaticQuery, graphql } from "gatsby"
export const useSliderquery = () => {
  
  const sliderr = useStaticQuery(
    graphql`
      query sliderAboutPageQuery {
        allWordpressWpMedia(filter: {caption: {nin: "", ne: ""}}) {
          edges {
            node {
              id
              caption
       
              source_url
            }
          }
        }
        wordpressPage(slug: {eq: "about-us"}) {
          acf {
            slider1
          }
        }
        allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "news"}}}}) {
          edges {
            node {
              acf {
                descriptPost
                fullDescriptPost
                imgDescriptPost {
                  source_url
                  title
                }
              }
              date(formatString: "DD.MM.YYYY")
              wordpress_id
              title
              slug
              categories {
                slug
              }
            }
          }
        }
        
      }
    `
  )
  return sliderr
}