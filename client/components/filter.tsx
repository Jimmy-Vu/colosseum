import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootState";
import FilterMobileModal from "./filter-mobile-modal";
import FilterWebDropdown from "./filter-web-dropdown";

interface Types {
  commercial: boolean;
  powerlifting: boolean;
  weightlifting: boolean;
  crossfit: boolean;
  climbing: boolean;
  boxing: boolean;
  ['muay-thai']: boolean;
  taekwondo: boolean;
  karate: boolean;
  ['brazilian-ji-jijutsu']: boolean;
  ['krav-maga']: boolean;
  wrestling: boolean;
  kickboxing: boolean;
}

interface Props {
  handleFiltering: (types: Types) => void;
}

export default function Filter(props: Props) {
  const { handleFiltering } = props;
  const isMobileView = useSelector((state: RootState) => state.app.isMobileView);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    types: {
      commercial: false,
      powerlifting: false,
      weightlifting: false,
      crossfit: false,
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

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  function handleCheckboxes(e: React.ChangeEvent<HTMLFieldSetElement>) {
    setFilters(prev => ({
      ...prev,
      types: {
        ...prev.types,
        [e.currentTarget.name]: e.currentTarget.checked
      }
    }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    handleFiltering(filters.types);
    setIsOpen(false);
  }

  return (
    <div className="filter">
      <div className="filter-web">
        <button onClick={handleClick} className="btn filter-web__btn">
          Filter
          <i className="fa-sharp fa-solid fa-caret-down"></i>
        </button>
        {isOpen && !isMobileView &&
          <FilterWebDropdown handleCheckboxes={handleCheckboxes} handleSubmit={handleSubmit} filters={filters} />
        }
      </div>
      <div className="filter-mobile">
        <button onClick={handleClick} className="filter-mobile__btn">
          <i className={`fa-solid ${isOpen ? 'fa-x' : 'fa-filter'}`}></i>
        </button>
        {isOpen && isMobileView &&
          <FilterMobileModal handleCheckboxes={handleCheckboxes} handleSubmit={handleSubmit} filters={filters} />
        }
      </div>
    </div>
  );
}
