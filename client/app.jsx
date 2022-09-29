import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import parseRoute from "./lib/parseRoute";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Listings from "./pages/listings";
import Gym from "./pages/gym";
import CreateListing from "./pages/create-listing";
import Header from "./components/header";
import Footer from "./components/footer";
import EditListing from "./pages/edit-listing";

function App(props) {
  const [stateRoute, setStateRoute] = useState({
    route: parseRoute(window.location.hash)
  });

  useEffect(() => {
    window.addEventListener('hashchange', event => {
      setStateRoute({ route: parseRoute(window.location.hash) })
    });
  }, []);

  const { route } = stateRoute;
  let gymId = '';
  switch (route.path) {
    case '':
      return (
        <div className="main-container">
          <Header />
          <Home />
          <Footer />
        </div>
      );
    case "listings":
      return (
        <div className="main-container">
          <Header />
          <Listings></Listings>
          <Footer />
        </div>
      );
    case "gyms":
      gymId = route.params.get('gymId');
      return (
        <div className="main-container">
          <Header />
          <Gym gymId={gymId} />
          <Footer />
        </div>
      );
    case "create":
      return (
        <div className="main-container">
          <Header />
          <CreateListing />
          <Footer />
        </div>
      );
    case "edit":
      gymId = route.params.get('gymId');
      return (
        <div className="main-container">
          <Header />
          <EditListing gymId={gymId}  />
          <Footer />
        </div>
      );
    case "not-found":
    default:
      return (
        <div className="main-container">
          <Header />
          <NotFound />
          <Footer />
        </div>
      );
  }

}

export default App;
