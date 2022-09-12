import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import parseRoute from "./lib/parseRoute";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Listings from "./pages/listings";
import Header from "./components/header";
import Footer from "./components/footer";

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
  switch (route.path) {
    case '':
      return (
        <div className="main-container">
          <Header />
          <Home />
          <Footer />
        </div>
      );
    case 'listings':
      return (
        <div className="main-container">
          <Header />
          <Listings></Listings>
          <Footer />
        </div>
      );
    default:
      return (
        <NotFound />
      );
  }

}

export default App;
