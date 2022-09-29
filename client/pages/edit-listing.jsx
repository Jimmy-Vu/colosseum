import React, { useEffect, useState } from "react";
import GymForm from "../components/gym-form";
import GymFormEdit from "../components/gym-form-edit";
import Spinner from "../components/spinner";

export default function EditListing(props) {
  const [isLoading, setIsLoading] = useState(false);
  const gymId = props.gymId;
  // const [gymData, setGymData] = useState({
  //   gymId: props.gymId,
  //   name: '',
  //   address: '',
  //   type: '',
  //   image: '',
  //   description: ''
  // });

  // useEffect(() => {
  //   fetch(`/api/gyms/${gymData.gymId}`, { method: 'GET' })
  //     .then(res => res.json())
  //     .then(data => {
  //       setGymData({
  //         name: data.name,
  //         address: data.address,
  //         type: data.type,
  //         image: data.imageURL,
  //         description: data.description
  //       });
  //     })
  //     .catch(err => console.error('Error during fetch get route:', err))
  // }, []);

  return (
    <>
      <main className="create-main">
        <GymFormEdit gymId={gymId} setIsLoading={setIsLoading} />
      </main>
      <Spinner isLoading={isLoading} />
    </>
  )
}
