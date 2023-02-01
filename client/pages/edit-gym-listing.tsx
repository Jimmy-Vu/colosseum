import React, { useState } from "react";
import EditGymForm from "../components/edit-gym-form";
import Spinner from "../components/spinner";

export default function EditGymListing(props: { gymId: number }) {
  const [isLoading, setIsLoading] = useState(false);
  const gymId = props.gymId;

  return (
    <>
      <main className="create__main">
        <EditGymForm gymId={gymId} setIsLoading={setIsLoading} />
      </main>
      <Spinner isLoading={isLoading} />
    </>
  )
}
