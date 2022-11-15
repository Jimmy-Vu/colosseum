import React, { useState } from "react";

export default function Filter(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className="filter">
      <div className="filter__web">
        <button className="btn filter__button">
          Types
          <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
      </div>
      <button onClick={handleClick} className="filter__mobile">
        <i className={`fa-solid ${isOpen ? 'fa-x' : 'fa-filter'}`}></i>
      </button>
    </div>
  );
}
