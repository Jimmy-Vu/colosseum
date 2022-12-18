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

export default function GymForm(props: { setIsLoading: (boolean: boolean) => void; }) {
  const currentUserId = useSelector((state: RootState) => state.user.userId);
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
    setInputs(prev => ({ ...prev, userId: currentUserId }));
  }, [currentUserId])

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
        console.log(data);
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
    <form className="create-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="text-inputs">
        <label className="name-label" htmlFor="name">Name</label>
        <input className="name-input" onChange={handleChange} type="text" name="gymName" id="gymName" required />
        <label className="address-label" htmlFor="address">Address</label>
        <input className="address-input" onChange={handleChange} type="text" name="address" id="address" required />
        <label className="description-label" htmlFor="description">Description</label>
        <textarea className="description-input" onChange={handleChangeTextArea} name="description" id="description" cols={30} rows={5} required></textarea>
      </div>
      <fieldset id="type" className="specialization-fieldset">
        <legend>Choose the type of specialization(s) of the arena:</legend>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="commercial" id="commercial" />
          <label htmlFor="commercial">Commercial</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="powerlifting" id="powerlifting" />
          <label htmlFor="powerlifting">Powerlifting</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="weightlifting" id="weightlifting" />
          <label htmlFor="weightlifting">Olympic Weightlifting</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="crossfit" id="crossfit" />
          <label htmlFor="crossfit">Crossfit</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="climbing" id="climbing" />
          <label htmlFor="climbing">Climbing</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="boxing" id="boxing" />
          <label htmlFor="boxing">Boxing</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="kickboxing" id="kickboxing" />
          <label htmlFor="kickboxing">Kickboxing</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="muay-thai" id="muay-thai" />
          <label htmlFor="muay-thai">Muay Thai</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="taekwondo" id="taekwondo" />
          <label htmlFor="taekwondo">Taekwondo</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="karate" id="karate" />
          <label htmlFor="karate">Karate</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="brazilian-ji-jijutsu" id="brazilian-ji-jijutsu" />
          <label htmlFor="brazilian-ji-jijutsu">Brazilian Ji Jijutsu</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="krav-maga" id="krav-maga" />
          <label htmlFor="krav-maga">Krav Maga</label>
        </div>
        <div className="checkbox-option">
          <input onClick={handleCheckboxes} type="checkbox" name="wrestling" id="wrestling" />
          <label htmlFor="wrestling">Wrestling</label>
        </div>
      </fieldset>
      <div className="upload-submit-container">
        <label htmlFor="image">Choose an image for the gym</label>
        <input onChange={handleUpload} id="image" type="file" accept="image/*" />
        <button className="submit-button" type="submit">Submit</button>
      </div>
    </form>
  );
}
