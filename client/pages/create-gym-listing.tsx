import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/rootState";
import AddGymForm from "../components/add-gym-form";
import Spinner from "../components/spinner";


export default function CreateGymListing(props: {}) {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.app.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      window.location.hash = '#auth';
    }
  }, []);

  return (
    <>
      <main className="create-main">
        <AddGymForm setIsLoading={setIsLoading} />
      </main>
      <Spinner isLoading={isLoading} />
    </>
  );
}
