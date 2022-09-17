import React from "react";

function CreateListing(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {

  }

  return (
    <main className="create-main">
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="text-inputs">
          <label className="name-label" htmlFor="name">Name</label>
          <input className="name-input" onChange={handleChange} type="text" name="name" id="name" />
          <label className="address-label" htmlFor="address">Address</label>
          <input className="address-input" onChange={handleChange} type="text" name="address" id="address" />
        </div>
        <fieldset className="specialization-fieldset">
          <legend>Choose the type of specialization(s) of the arena:</legend>
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
            <input type="checkbox" name="bjj" id="bjj" />
            <label htmlFor="bjj">Brazilian Ji Jijutsu</label>
          </div>
        </fieldset>
        <div className="upload-submit-container">
          <label htmlFor="gym-image">Choose an image for the gym</label>
          <input id="gym-image" type="file" accept="image/*" />
          <button className="submit-button" type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
