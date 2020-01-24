import React from "react";
import { StaticQuery, graphql} from "gatsby"
import FooterLogo from "./FooterLogo";
import MenuMainMenuContainer from "./MenuMainMenuContainer";
import FooterInfo from "./FooterInfo";
// import styled from "styled-components";
// import { graphql } from "gatsby"
import Img from "gatsby-image"


export default () => (
  <StaticQuery
    query={graphql`
   {
      file(name: {eq: "Layer-10"}) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `}
    render={(data) => (
      <div 
      className="footer"
      // css={`background-image: url(${backgroundImg})`}

      >
         
         <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
        className="foterimg"
        Tag="div"
        style={ {position: `absolute` }}
        />
      <div className="m_container">
        <FooterLogo></FooterLogo>
        <div className="footer_menu">
          <MenuMainMenuContainer></MenuMainMenuContainer>
        </div>
        <FooterInfo></FooterInfo>
      </div>
      
    </div>
    )}
  />
);


