import React from "react";

function CreateListing(props) {

  function handleSubmit(e) {

  }

  function handleChange(e) {

  }

  return (
    <main className="create-main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" name="name" id="name" />
        <label htmlFor="name">Address</label>
        <input onChange={handleChange} type="text" name="address" id="address" />
        <label htmlFor="type"></label>
        <fieldset>
          <legend>Choose the type of specialization(s) of the arena:</legend>
          <div>
            <input type="checkbox" name="commercial" id="commercial" />
            <label htmlFor="commercial">Commercial</label>
          </div>
          <div>
            <input type="checkbox" name="powerlifting" id="powerlifting" />
            <label htmlFor="">Powerlifting</label>
          </div>
          <div>
            <input type="checkbox" name="weightlifting" id="weightlifting" />
            <label htmlFor="">Olympic Weightlifting</label>
          </div>
          <div>
            <input type="checkbox" name="climbing" id="climbing" />
            <label htmlFor="">Climbing</label>
          </div>
          <div>
            <input type="checkbox" name="powerlifting" id="powerlifting" />
            <label htmlFor="">Powerlifting</label>
          </div>
        </fieldset>
      </form>
    </main>
  );
}

export default CreateListing;
