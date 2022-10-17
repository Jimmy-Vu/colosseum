import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Home(props) {
  return (
    <div className="home-container">
      <main className="home-main">
        {/* <section className="home-description">
          <p>Welcome to Colosseum!</p>
          <p>Your first steps into self betterment awaits.</p>
        </section> */}
        <a className="home-search-btn" href="#listings">Find Your Arena</a>
      </main>
    </div>
  );
}

export default Home;
