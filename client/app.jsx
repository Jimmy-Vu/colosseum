import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import parseRoute from "./lib/parseRoute";
import tokenVerify from "./lib/tokenVerify";
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
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/appSlice';
import { setStateUser } from './redux/userSlice';

function App(props) {
  const dispatch = useDispatch();
  const aModalIsOpen = useSelector(state => state.app.aModalIsOpen);

  const [stateRoute, setStateRoute] = useState({
    route: parseRoute(window.location.hash)
  });

  useEffect(() => {
    window.addEventListener('hashchange', event => {
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

  function handleSignIn(result) {
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
  let gymId = '';
  switch (route.path) {
    case '':
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <Home />
          <Footer />
        </div>
      );
    case "listings":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <Listings />
          <Footer />
        </div>
      );
    case "gyms":
      gymId = route.params.get('gymId');
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <Gym gymId={gymId} />
          <Footer />
        </div>
      );
    case "create":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <CreateListing />
          <Footer />
        </div>
      );
    case "edit":
      gymId = route.params.get('gymId');
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <EditListing gymId={gymId} />
          <Footer />
        </div>
      );
    case "auth":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <Auth handleSignIn={handleSignIn} />
          <Footer />
        </div>
      );
    case "account":
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <AccountPage />
          <Footer />
        </div>
      );
    case "not-found":
    default:
      return (
        <div className="main-container">
          <Header handleSignOut={handleSignOut} setStateRoute={setStateRoute} />
          <NotFound />
          <Footer />
        </div>
      );
  }

}

export default App;
