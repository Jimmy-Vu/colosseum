import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App(props) {
  const [view, setView] = useState('');
  useEffect(() => {
    setView(window.location.hash);
  }, []);

  if (view === '') {
    return (
      <Home />
    );
  } else {
    return (
      <NotFound />
    )
  }
}

export default App;
