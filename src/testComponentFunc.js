
// import React from "react"
// import Layout from "../layout"
// import { graphql } from 'gatsby'
// const CatalogPage = ({data, location}) => 
// {
//   // console.log(data)
// return (
//   <Layout location={location}>
//     <h1>newsPostTemplate.js Template</h1>
//     {/* {data.site.siteMetadata.description} */}
//   </Layout>
// )
// }
// export const query = graphql`
//   query Wery($slug: String) {
//     allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
//       edges {
//         node {
//           acf {
//             descriptPost
//             fullDescriptPost
//             imgDescriptPost {
//               source_url
//               title
//             }
//           }
//           date(formatString: "DD.MM.YYYY")
//           wordpress_id
//           title
//           slug
//           categories {
//             slug
//           }
//         }
//       }
//     }
//   }
// `
// export default CatalogPage
