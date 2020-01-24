import React from "react"
import Layout from "../../components/layout"
import { graphql } from 'gatsby'
const NewsTemplate = ({data, location}) => 
{
  console.log(data)
return (
  <Layout location={location}>
    <h1>NewsTemplate.js Template</h1>
    {/* {data.site.siteMetadata.description} */}
  </Layout>
)
}
export const query = graphql`
  query NewsQuery($slug: String) {
    allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
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
export default NewsTemplate