import React, { useEffect, useState } from "react";
import GymForm from "../components/gym-form";
import Spinner from "../components/spinner";
import { useSelector } from 'react-redux';

function CreateListing(props) {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.hash = '#auth';
    }
  }, []);

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
