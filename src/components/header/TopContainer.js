import React from "react";
import Logo from "./Logo";
import TimeWork from "./TimeWork";
import Tel from "./Tel";


import { StaticQuery, graphql} from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query topHader {
        allWordpressAcfUsers {
          edges {
            node {
              acf {
                work_time
                telephone
                logo {
                  source_url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (

      <div className="top_container flex">
        <div className="container_n flex flex-center">
          <Logo></Logo>
          <TimeWork 
          workTime={data.allWordpressAcfUsers.edges[0].node.acf.work_time} 
          />
          <Tel
          telephone={data.allWordpressAcfUsers.edges[0].node.acf.telephone}
          />
          <div className="top_btn">
            <a href="#ex1" rel="modal:open">
              Бесплатный звонок
            </a>
          </div>
        </div>
      </div>
     
    )}
  />
)












