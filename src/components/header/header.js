
import PropTypes from "prop-types"
import React from "react"
import TopContainer from "./TopContainer";
import NavCollapseMainmenu from "./NavCollapseMainmenu";

const Header = ({currectUrl, setinCatalog, inCatalog}) => (
  // console.log(currectUrl);
  <header
    // style={{
    //   background: `rebeccapurple`,
    //   marginBottom: `1.45rem`,
    // }}
    className="header"
  >
    <TopContainer></TopContainer>
        <div className="hr" />
        <div className="nav_container">
          <input
            id="menu__toggle"
            type="checkbox"
            style={{
              position: "fixed",
              opacity: 0
            }}
          />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span />
          </label>
          <NavCollapseMainmenu currectUrl={currectUrl} setinCatalog={setinCatalog} inCatalog={inCatalog}></NavCollapseMainmenu>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
