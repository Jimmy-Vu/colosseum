import React, { useState } from "react";
import FilterMobileModal from "./filter-mobile-modal";

export default function Filter(props) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="filter">
      <div className="filter-web">
        <button className="btn filter-web__btn">
          Types
          <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
      </div>
      <div className="filter-mobile">
        <button onClick={handleClick} className="filter-mobile__btn">
          <i className={`fa-solid ${isOpen ? 'fa-x' : 'fa-filter'}`}></i>
        </button>
        {isOpen &&
          <FilterMobileModal />
        }
      </div>
    </div>
  );
}
