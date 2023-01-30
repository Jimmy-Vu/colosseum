import React, { useEffect, useState } from "react";
import editTypeAdjust from "../lib/editTypeAdjust";

interface Inputs {
  userId: string;
  gymName: string;
  address: string;
  type: GymType;
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


export default function EditGymForm(props: { setIsLoading: (boolean: boolean) => void; gymId: number; }) {
  const setIsLoading = props.setIsLoading;
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
    fetch(`/api/gyms/${props.gymId}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setInputs({
          userId: data.userId,
          gymName: data.gymName,
          address: data.address,
          type: editTypeAdjust(data.type),
          image: data.imageURL,
          description: data.description
        });
      })
      .catch(err => console.error('Error during fetch get route:', err))
  }, []);

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
        ...prev.type,
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
    setIsLoading(true);
    const formData = new FormData();
    formData.append('userId', inputs.userId);
    formData.append('gymName', inputs.gymName);
    formData.append('address', inputs.address);
    formData.append('type', JSON.stringify(inputs.type));
    formData.append('image', inputs.image);
    formData.append('description', inputs.description);

    fetch(`/api/gyms/${props.gymId}`, {
      method: 'PATCH',
      headers: {
        'access-token': `${window.localStorage.getItem('access-token')}`
      },
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        if (!data.gymId || data.gymId === undefined) {
          window.location.hash = "#not-found";
        } else {
          window.location.hash = `#gyms?gymId=${data.gymId}`;
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <form className="create__form" onSubmit={handleSubmit} encType="multipart/form-data">
      <h1 className="create__form-heading">Edit An Arena</h1>
      <div className="create__form-text-inputs">
        <label className="text-inputs__name-label" htmlFor="name">Name</label>
        <input className="text-inputs__name-input" onChange={handleChange} type="text" name="name" id="name" value={inputs.gymName} required />
        <label className="text-inputs__address-label" htmlFor="address">Address</label>
        <input className="text-inputs__address-input" onChange={handleChange} type="text" name="address" id="address" value={inputs.address} required />
        <label className="text-inputs__description-label" htmlFor="description">Description</label>
        <textarea className="description-input" onChange={handleChangeTextArea} name="description" id="description" value={inputs.description} cols={30} rows={5} required></textarea>
      </div>
      <fieldset id="type" className="create__form__specialization">
        <legend className="specialization__legend">Choose the type of specialization(s) of the arena:</legend>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="commercial" id="commercial" onChange={handleCheckboxes} checked={inputs.type.commercial} />
          <label className="checkbox-option__label" htmlFor="commercial">Commercial</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="powerlifting" id="powerlifting" onChange={handleCheckboxes} checked={inputs.type.powerlifting} />
          <label className="checkbox-option__label" htmlFor="powerlifting">Powerlifting</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="weightlifting" id="weightlifting" onChange={handleCheckboxes} checked={inputs.type.weightlifting} />
          <label className="checkbox-option__label" htmlFor="weightlifting">Olympic Weightlifting</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="crossfit" id="crossfit" onChange={handleCheckboxes} checked={inputs.type.crossfit} />
          <label className="checkbox-option__label" htmlFor="crossfit">Crossfit</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="climbing" id="climbing" onChange={handleCheckboxes} checked={inputs.type.climbing} />
          <label className="checkbox-option__label" htmlFor="climbing">Climbing</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="boxing" id="boxing" onChange={handleCheckboxes} checked={inputs.type.boxing} />
          <label className="checkbox-option__label" htmlFor="boxing">Boxing</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="kickboxing" id="kickboxing" onChange={handleCheckboxes} checked={inputs.type.kickboxing} />
          <label className="checkbox-option__label" htmlFor="kickboxing">Kickboxing</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="muay-thai" id="muay-thai" onChange={handleCheckboxes} checked={inputs.type['muay-thai']} />
          <label className="checkbox-option__label" htmlFor="muay-thai">Muay Thai</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="taekwondo" id="taekwondo" onChange={handleCheckboxes} checked={inputs.type.taekwondo} />
          <label className="checkbox-option__label" htmlFor="taekwondo">Taekwondo</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="karate" id="karate" onChange={handleCheckboxes} checked={inputs.type.karate} />
          <label className="checkbox-option__label" htmlFor="karate">Karate</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="brazilian-ji-jijutsu" onChange={handleCheckboxes} id="brazilian-ji-jijutsu" checked={inputs.type['brazilian-ji-jijutsu']} />
          <label className="checkbox-option__label" htmlFor="brazilian-ji-jijutsu">Brazilian Ji Jijutsu</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="krav-maga" id="krav-maga" onChange={handleCheckboxes} checked={inputs.type['krav-maga']} />
          <label className="checkbox-option__label" htmlFor="krav-maga">Krav Maga</label>
        </div>
        <div className="specialization__checkbox-option">
          <input className="checkbox-option__input" type="checkbox" name="wrestling" id="wrestling" onChange={handleCheckboxes} checked={inputs.type.wrestling} />
          <label className="checkbox-option__label" htmlFor="wrestling">Wrestling</label>
        </div>
      </fieldset>
      <div className="edit-img__container">
        <div className="upload__container">
          <label className="upload__label" htmlFor="image">Choose a new image for the gym (optional):</label>
          <input className="upload__input" onChange={handleUpload} id="image" type="file" accept="image/*" defaultValue={`${inputs.image}`} />
        </div>
        <figure className="edit-img__figure">
          <figcaption className="figure__caption">Original Photo</figcaption>
          <a href={`${inputs.image}`} target="_blank"><img className="figure__img-preview" src={`${inputs.image}`} alt="Main gym image" /></a>
        </figure>
      </div>
      <button className="create__form__submit-btn" type="submit">Submit</button>
    </form>
  );
}
