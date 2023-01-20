import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// Redux
import { useDispatch } from 'react-redux';
import { login, logout, setMobileTrue, setMobileFalse } from './redux/appSlice';
import { setStateUser } from './redux/userSlice';
// Functions
import parseRoute from "./lib/parseRoute";
import tokenVerify from "./lib/tokenVerify";
import checkMobileView from "./lib/checkMobileView";
// Components
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Listings from "./pages/listings";
import Gym from "./pages/gym";
import CreateListing from "./pages/create-listing";
import Header from "./components/header";
import Footer from "./components/footer";
import EditListing from "./pages/edit-listing";
import Auth from "./pages/auth";
import AccountPage from "./pages/account-page";

interface StateRoute {
  route: {
    path: string;
    params: URLSearchParams;
  }
}

function App(props: {}) {
  const dispatch = useDispatch();
  const [stateRoute, setStateRoute] = useState<StateRoute>({
    route: parseRoute(window.location.hash)
  });

  useEffect(() => {
    checkMobileView() ? dispatch(setMobileTrue()) : dispatch(setMobileFalse());
    window.addEventListener('hashchange', () => {
      setStateRoute({ route: parseRoute(window.location.hash) })
    });
    const token = window.localStorage.getItem('access-token');
    const user = token ? tokenVerify(token) : null;
    if (!user) {
      dispatch(logout());
    } else {
      dispatch(setStateUser(user));
      dispatch(login());
    }
  }, []);

  function handleSignIn(result: { user: string; token: string }) {
    const { user, token } = result;
    window.localStorage.setItem('access-token', token);
    dispatch(setStateUser(user));
    dispatch(login());
    window.location.hash = '#listings';
  }

  function handleSignOut() {
    window.localStorage.removeItem('access-token');
    dispatch(setStateUser({}));
    dispatch(logout());
    window.location.hash = '#listings';
  }

  const { route } = stateRoute;
  let gymId = 0;
  switch (route.path) {
    case '':
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <Home />
          {/* <Footer /> */}
        </div>
      );
    case "listings":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <Listings />
          <Footer />
        </div>
      );
    case "gyms":
      gymId = parseInt(route.params.get('gymId') as string, 10);
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <Gym gymId={gymId} />
          <Footer />
        </div>
      );
    case "create":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <CreateListing />
          <Footer />
        </div>
      );
    case "edit":
      gymId = parseInt(route.params.get('gymId') as string, 10)
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <EditListing gymId={gymId} />
          <Footer />
        </div>
      );
    case "auth":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <Auth handleSignIn={handleSignIn} />
          <Footer />
        </div>
      );
    case "account":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <AccountPage />
          <Footer />
        </div>
      );
    case "not-found":
    default:
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} />
          <NotFound />
          <Footer />
        </div>
      );
  }

}

export default App;
