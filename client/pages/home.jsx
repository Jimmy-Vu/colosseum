import React from "react";
import { useSelector } from "react-redux";

function Home(props) {
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const username = useSelector(state => state.user.username);

  return (
    <div className="home-container">
      <main className="home-main">
        <section className="home-description">
          {/* <p>{Welcome to Colosseum!}</p> */}
          {/* <p>Your first steps into self betterment awaits.</p> */}
        </section>
        <a className="home-search-btn" href="#listings">Find Your Arena</a>
      </main>
    </div>
  );
}

export default Home;
