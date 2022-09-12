import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Home(props) {
  return (
    <div className="home-container">
      <Header></Header>
      <main className="home-main">
        <a className="home-search-btn" href="#listings">Find Your Arena</a>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
