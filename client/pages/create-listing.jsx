import React, { useEffect, useState } from "react";
import GymForm from "../components/gym-form";
import { MoonLoader } from "react-spinners";

function CreateListing(props) {
  const [isLoading, setIsLoading] = useState(false);
  const override = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    margin: "auto"
  };

  return (
    <>
      <main className="create-main">
        <GymForm setIsLoading={setIsLoading} />
      </main>
      <MoonLoader loading={isLoading} cssOverride={override} size="70px" />
    </>
  );
}

export default CreateListing;
