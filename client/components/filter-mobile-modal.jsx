import React, { useState } from "react";

export default function FilterMobileModal(props) {
  const [filters, setFilters] = useState({
    type: {
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
})
  return (
    <div className="filter-mobile__modal">
      <h3 className="filter-mobile__title">Filters</h3>
      <form className="filter-mobile__form">
        <fieldset className="types-fieldset">
          <legend>Type</legend>
          <div className="checkbox-option">
            <input type="checkbox" name="commercial" id="commercial" />
            <label htmlFor="commercial">Commercial</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="powerlifting" id="powerlifting" />
            <label htmlFor="powerlifting">Powerlifting</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="weightlifting" id="weightlifting" />
            <label htmlFor="weightlifting">Olympic Weightlifting</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="climbing" id="climbing" />
            <label htmlFor="climbing">Climbing</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="boxing" id="boxing" />
            <label htmlFor="boxing">Boxing</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="kickboxing" id="kickboxing" />
            <label htmlFor="kickboxing">Kickboxing</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="muay-thai" id="muay-thai" />
            <label htmlFor="muay-thai">Muay Thai</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="taekwondo" id="taekwondo" />
            <label htmlFor="taekwondo">Taekwondo</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="karate" id="karate" />
            <label htmlFor="karate">Karate</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="brazilian-ji-jijutsu" id="brazilian-ji-jijutsu" />
            <label htmlFor="brazilian-ji-jijutsu">Brazilian Ji Jijutsu</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="krav-maga" id="krav-maga" />
            <label htmlFor="krav-maga">Krav Maga</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="wrestling" id="wrestling" />
            <label htmlFor="wrestling">Wrestling</label>
          </div>
        </fieldset>
        <button className="submit-btn" type="submit">Apply</button>
      </form>
    </div>
  )
}
