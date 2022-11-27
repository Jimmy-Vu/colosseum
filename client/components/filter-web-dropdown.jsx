import React from "react";

export default function FilterWebDropdown(props) {
  const { handleCheckboxes, handleSubmit, filters } = props;

  return (
    <div className="filter-web__dropdown">
      <form onSubmit={handleSubmit} className="filter-web__form">
        <fieldset onChange={handleCheckboxes} className="types-fieldset">
          <legend>Types</legend>
          <div className="checkbox-option">
            <input type="checkbox" name="commercial" id="commercial" defaultChecked={filters.types.commercial} />
            <label htmlFor="commercial">Commercial</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="powerlifting" id="powerlifting" defaultChecked={filters.types.powerlifting} />
            <label htmlFor="powerlifting">Powerlifting</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="weightlifting" id="weightlifting" defaultChecked={filters.types.weightlifting} />
            <label htmlFor="weightlifting">Olympic Weightlifting</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="crossfit" id="crossfit" defaultChecked={filters.types.crossfit} />
            <label htmlFor="crossfit">Crossfit</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="climbing" id="climbing" defaultChecked={filters.types.climbing} />
            <label htmlFor="climbing">Climbing</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="boxing" id="boxing" defaultChecked={filters.types.boxing} />
            <label htmlFor="boxing">Boxing</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="kickboxing" id="kickboxing" defaultChecked={filters.types.kickboxing} />
            <label htmlFor="kickboxing">Kickboxing</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="muay-thai" id="muay-thai" defaultChecked={filters.types['muay-thai']} />
            <label htmlFor="muay-thai">Muay Thai</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="taekwondo" id="taekwondo" defaultChecked={filters.types.taekwondo} />
            <label htmlFor="taekwondo">Taekwondo</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="karate" id="karate" defaultChecked={filters.types.karate} />
            <label htmlFor="karate">Karate</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="brazilian-ji-jijutsu" id="brazilian-ji-jijutsu" defaultChecked={filters.types['brazilian-ji-jijutsu']} />
            <label htmlFor="brazilian-ji-jijutsu">Brazilian Ji Jijutsu</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="krav-maga" id="krav-maga" defaultChecked={filters.types['krav-maga']} />
            <label htmlFor="krav-maga">Krav Maga</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" name="wrestling" id="wrestling" defaultChecked={filters.types.wrestling} />
            <label htmlFor="wrestling">Wrestling</label>
          </div>
        </fieldset>
        <button className="apply-btn" type="submit">Apply</button>
      </form>
    </div>
  );
}
