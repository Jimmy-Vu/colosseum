import React, { useState } from "react";
import GymFormEdit from "../components/gym-form-edit";
import Spinner from "../components/spinner";

export default function EditListing(props: { gymId: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const gymId = props.gymId;

  return (
    <>
      <main className="create-main">
        <GymFormEdit gymId={gymId} setIsLoading={setIsLoading} />
      </main>
      <Spinner isLoading={isLoading} />
    </>
  )
}
