import React, { useState, useEffect } from "react";
import FilterMobileModal from "./filter-mobile-modal";

export default function Filter(props) {
  const { handleFiltering } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [filters, setFilters] = useState({
    types: {
      commercial: false,
      powerlifting: false,
      weightlifting: false,
      climbing: false,
      boxing: false,
      ['muay-thai']: false,
      taekwondo: false,
      karate: false,
      ['brazilian-ji-jijutsu']: false,
      ['krav-maga']: false,
      wrestling: false,
      kickboxing: false
    }
  });

  useEffect(() => {
    console.log(filters.types);
  }, [filters])

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  function handleCheckboxes(e) {
    setFilters(prev => ({
      ...prev,
      types: {
        ...prev.types,
        [e.target.name]: e.target.checked
      }
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFiltering(filters.types);
    setIsOpen(false);
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
          <FilterMobileModal handleCheckboxes={handleCheckboxes} handleSubmit={handleSubmit} filters={filters} />
        }
      </div>
    </div>
  );
}
