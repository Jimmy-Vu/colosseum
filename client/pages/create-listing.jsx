import React, { useEffect, useState } from "react";
import GymForm from "../components/gym-form";
import Spinner from "../components/spinner";

function CreateListing(props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <main className="create-main">
        <GymForm setIsLoading={setIsLoading} />
      </main>
      <Spinner isLoading={isLoading} />
    </>
  );
}

export default CreateListing;
