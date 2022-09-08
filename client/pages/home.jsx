import React from "react";
import Header from "../components/header";

function Home(props) {
  return (
    <div className="home-container">
      <Header></Header>
      <main className="home-main">
        <a className="home-search-btn">Search Arenas</a>
      </main>
    </div>
  );
}

export default Home;
