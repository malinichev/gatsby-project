
import React from "react"


const FormSearchInCatalogPage = ({handleChange, searchTerm}) => 
{
  // console.log(data)
  
return (
  <div className="m_container form_search">
        <form
          role="search"
          method="get"
          id="searchform"
          action="http://maxdenrd.beget.tech/"
        >
          <label className="screen-reader-text" htmlFor="s">
            Поиск:{" "}
          </label>
          <input type="text" 
           
          placeholder="Введи название товара" 
          name="s" 
          id="s"
          value={searchTerm}
          onChange={handleChange} 
          />
         
        </form>
      </div>
)
}

export default FormSearchInCatalogPage





