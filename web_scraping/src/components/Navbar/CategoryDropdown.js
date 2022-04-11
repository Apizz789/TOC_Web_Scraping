import '../../css/categoryDropdown.style.css'
import categoryList from '../../resources/categoryList.js'
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubCategoryDropdown from './SubCategoryDropdown';

let tog = {toggle: false}
function CategoryDropdown(props) {
  const [toggle, setToggle] = useState(categoryList)

  const toggleHandle = (name,val) => {
    const newToggle = toggle.map(obj =>
      obj.title == name ? { ...obj, toggle: val } : { ...obj, toggle: false }
  )
    setToggle(newToggle)
  }

  return (
    <div class="CategoryCard">
      <div class="dropdown-menu">
        <div class="dropdown-pad sub">
          {toggle.map((each) =>
            <div class="main-category-row">
              <div class='category-list'>{each.title}</div>
              {!each.toggle && <FontAwesomeIcon icon={faCaretRight} class="toggle-icon-sub" onClick={(e) => toggleHandle(each.title,true)} />}
              {each.toggle && <FontAwesomeIcon icon={faCaretLeft} class="toggle-icon-sub" onClick={(e) => toggleHandle(each.title,false)} />}
              {each.toggle && <SubCategoryDropdown subCategory={each.subCategory} />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryDropdown