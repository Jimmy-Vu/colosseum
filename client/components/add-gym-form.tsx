import React, { useEffect, useState } from "react";
import { RootState } from "../redux/rootState";
import { useSelector } from "react-redux";

interface Inputs {
  userId: string;
  gymName: string;
  address: string;
  type: GymType | string | Blob;
  image: File | string;
  description: string;
}

interface GymType {
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

export default function AddGymForm(props: { setIsLoading: (boolean: boolean) => void; }) {
  const currentUserId = useSelector((state: RootState) => state.user.userId);
  const setIsLoading = props.setIsLoading;
  const [atLeastOneBoxChecked, setAtLeastOneBoxChecked] = useState(false);

  const [inputs, setInputs] = useState<Inputs>({
    userId: '',
    gymName: '',
    address: '',
    type: {
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
    },
    image: '',
    description: ''
  });

  useEffect(() => {
    setInputs(prev => ({ ...prev, userId: currentUserId }));
  }, [currentUserId])

  useEffect(() => {
    if (Object.values(inputs.type).some(type => type === true)) {
      setAtLeastOneBoxChecked(true);
    } else {
      setAtLeastOneBoxChecked(false);
    }
  }, [inputs.type])

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const element = e.target as HTMLInputElement;
    setInputs(prev => ({
      ...prev,
      [element.id]: element.value
    }));
  }

  function handleChangeTextArea(e: React.FormEvent<HTMLTextAreaElement>) {
    const element = e.target as HTMLTextAreaElement;
    setInputs(prev => ({
      ...prev,
      [element.id]: element.value
    }));
  }

  function handleCheckboxes(e: React.FormEvent<HTMLInputElement>) {
    const element = e.target as HTMLInputElement;
    setInputs(prev => ({
      ...prev,
      type: {
        ...prev.type as GymType,
        [element.id]: element.checked
      }
    }));
  }

  function handleUpload(e: React.FormEvent<HTMLInputElement>) {
    const element = e.target as HTMLInputElement;
    setInputs(prev => ({ ...prev, image: (element.files as FileList)[0] }));
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!atLeastOneBoxChecked) {
      return;
    }
    const imageChosen = !(inputs.image === '')
    if (!imageChosen) {
      return;
    }

    setIsLoading(true);
    inputs.type = JSON.stringify(inputs.type);
    const formData = new FormData();

    /* Taking out to attempt manual setting of formData */
    // for (let i in inputs) {
    //   formData.set(`${i}`, `${inputs[i as keyof Inputs]}`);
    // }
    formData.append('userId', inputs.userId);
    formData.append('gymName', inputs.gymName);
    formData.append('address', inputs.address);
    formData.append('type', inputs.type);
    formData.append('image', inputs.image);
    formData.append('description', inputs.description);

    fetch('/api/gyms', {
      method: 'POST',
      headers: {
        'access-token': `${window.localStorage.getItem('access-token')}`
      },
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        if (!data.gymId) {
          window.location.hash = "#not-found";
        } else {
          window.location.hash = `#gyms?gymId=${data.gymId}`;
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <form className="create__form" onSubmit={handleSubmit} encType="multipart/form-data">
      <h1 className="create__form-heading">Add An Arena</h1>
      <div className="create__form-text-inputs">
        <label className="text-inputs__name-label" htmlFor="name">Name</label>
        <input className="text-inputs__name-input" onChange={handleChange} type="text" name="gymName" id="gymName" required />
        <label className="text-inputs__address-label" htmlFor="address">Address</label>
        <input className="text-inputs__address-input" onChange={handleChange} type="text" name="address" id="address" required />
        <label className="text-inputs__description-label" htmlFor="description">Description</label>
        <textarea className="description-input" onChange={handleChangeTextArea} name="description" id="description" cols={30} rows={5} required></textarea>
      </div>
      <fieldset id="type" className="create__form__specialization">
        {!atLeastOneBoxChecked && <span className="gym__form__error">Please choose at least one type.</span>}
        <legend className="specialization__legend">Choose the type of specialization(s) of the arena:</legend>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="commercial" id="commercial" />
          <label className="checkbox-option__label" htmlFor="commercial">Commercial</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="powerlifting" id="powerlifting" />
          <label className="checkbox-option__label" htmlFor="powerlifting">Powerlifting</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="weightlifting" id="weightlifting" />
          <label className="checkbox-option__label" htmlFor="weightlifting">Olympic Weightlifting</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="crossfit" id="crossfit" />
          <label className="checkbox-option__label" htmlFor="crossfit">Crossfit</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="climbing" id="climbing" />
          <label className="checkbox-option__label" htmlFor="climbing">Climbing</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="boxing" id="boxing" />
          <label className="checkbox-option__label" htmlFor="boxing">Boxing</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="kickboxing" id="kickboxing" />
          <label className="checkbox-option__label" htmlFor="kickboxing">Kickboxing</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="muay-thai" id="muay-thai" />
          <label className="checkbox-option__label" htmlFor="muay-thai">Muay Thai</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="taekwondo" id="taekwondo" />
          <label className="checkbox-option__label" htmlFor="taekwondo">Taekwondo</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="karate" id="karate" />
          <label className="checkbox-option__label" htmlFor="karate">Karate</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="brazilian-ji-jijutsu" id="brazilian-ji-jijutsu" />
          <label className="checkbox-option__label" htmlFor="brazilian-ji-jijutsu">Brazilian Ji Jijutsu</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="krav-maga" id="krav-maga" />
          <label className="checkbox-option__label" htmlFor="krav-maga">Krav Maga</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" onClick={handleCheckboxes} type="checkbox" name="wrestling" id="wrestling" />
          <label className="checkbox-option__label" htmlFor="wrestling">Wrestling</label>
        </div>
      </fieldset>
      <div className="upload__container">
        <div className="upload__text">
          <label className="upload__label" htmlFor="image">Choose an image for the gym:</label>
          {/* {formErrors.image && <span className="gym__form__error">An image is required.</span>} */}
        </div>
        <input className="upload__input" onChange={handleUpload} id="image" type="file" accept="image/*" />
      </div>
      <button className="create__form__submit-btn" type="submit">Submit</button>
    </form>
  );
}
