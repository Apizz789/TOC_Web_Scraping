import React from 'react'
import '../../css/categoryDropdown.style.css'

function SubCategoryDropdown(props) {
  return (
    <div class="SubCategoryCard"> 
        <div class = "dropdown-menu">
            <div class="dropdown-pad-sub">
              {props.subCategory.map((each) => 
                <div>
                    <div class='category-list' onClick={(e) => props.selectCategory(each.title)}>{each.title}</div>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default SubCategoryDropdown