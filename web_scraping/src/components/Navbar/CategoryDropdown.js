import '../../css/categoryDropdown.style.css'
import categoryList from '../../resources/categoryList.js'
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubCategoryDropdown from './SubCategoryDropdown';

let tog = { toggle: false }
function CategoryDropdown(props) {
  const [toggle, setToggle] = useState(categoryList)

  const toggleHandle = (name, val) => {
    const newToggle = toggle.map(obj =>
      obj.title == name ? { ...obj, toggle: val } : { ...obj, toggle: false }
    )
    setToggle(newToggle)
  }
  
  const [subToggle,setSubToggle] =useState(false)
  const showSubToggle =(val)=>{
    setSubToggle(val)
  }

  return (
    <div class="CategoryCard"  >
      <div class="dropdown-menu" onMouseEnter={(e) => props.toggleHandle(true)} onMouseLeave={(e) =>  props.toggleHandle(false)} >
        <div class="dropdown-pad sub">
          {toggle.map((each) =>
            <div class="main-category-row" onMouseEnter={(e)=> toggleHandle(each.title, true)}>
            
            {each.toggle && <div class='category-list-selected' onClick={(e) => props.selectCategory(each.title)}>{each.title}</div>}

            {!each.toggle && <div class='category-list' onClick={(e) => props.selectCategory(each.title)}>{each.title}</div>}
              {!each.toggle && <FontAwesomeIcon icon={faCaretRight} class="toggle-icon-sub"
                onMouseEnter={() => toggleHandle(each.title, true)}
              />}
              {each.toggle && <FontAwesomeIcon icon={faCaretLeft} class="toggle-icon-sub-selected" 
                onMouseEnter={() => toggleHandle(each.title, true)}
               />}
              {subToggle && each.toggle && <SubCategoryDropdown selectCategory={props.selectCategory} subCategory={each.subCategory} />}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryDropdown