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

export default NewsTemplate