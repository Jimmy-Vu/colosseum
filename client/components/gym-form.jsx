import React, { useState } from "react";

export default function GymForm(props) {
  const setIsLoading = props.setIsLoading;
  const [inputs, setInputs] = useState({
    name: '',
    address: '',
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
    },
    image: '',
    description: ''
  });

  function handleChange(e) {
    setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleCheckboxes(e) {
    setInputs(prev => ({
      ...prev,
      type: {
        ...prev.type,
        [event.target.id]: event.target.checked
      }
    }));
  }

  function handleUpload(e) {
    setInputs(prev => ({ ...prev, image: e.target.files[0] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    inputs.type = JSON.stringify(inputs.type);
    const formData = new FormData();

    for (let i in inputs) {
      formData.set(i, inputs[i]);
    }

    fetch('/api/gyms', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        if (!data.gymId) {
          window.location.hash = "#not-found";
        } else {
          window.location.hash = `#gyms?gymId=${inputs.gymId}`;
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <form className="create-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="text-inputs">
        <label className="name-label" htmlFor="name">Name</label>
        <input className="name-input" onChange={handleChange} type="text" name="name" id="name" required/>
        <label className="address-label" htmlFor="address">Address</label>
        <input className="address-input" onChange={handleChange} type="text" name="address" id="address" required/>
        <label className="description-label" htmlFor="description">Description</label>
        <textarea className="description-input" onChange={handleChange} name="description" id="description" cols="30" rows="5" required></textarea>
      </div>
      <fieldset onChange={handleCheckboxes} id="type" className="specialization-fieldset">
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
      <div className="upload-submit-container">
        <label htmlFor="image">Choose an image for the gym</label>
        <input onChange={handleUpload} id="image" type="file" accept="image/*" required/>
        <button className="submit-button" type="submit">Submit</button>
      </div>
    </form>
  );
}
