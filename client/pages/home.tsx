import React from "react";

function Home(props: {}) {

  return (
    <div className="home__container">
      <main className="home__main">
        <section className="home__hero"></section>
        <section className="home__welcome-section">
          <div className="home__welcome-section__description">
            <h1 className="home__welcome-section__description__title">Discover the best <br />
              arenas on Earth.</h1>
            <p className="home__welcome-section__description__text">Colosseum presents an exclusive selection of the
              finest gyms around the globe. Your first steps into self betterment awaits.</p>
            <ul className="home__welcome-section__description__list">
              <li><i className="fa-solid fa-circle-chevron-right"></i>Add your own gym listings.</li>
              <li><i className="fa-solid fa-circle-chevron-right"></i>Leave reviews for all your favorite places.</li>
              <li><i className="fa-solid fa-circle-chevron-right"></i>Filter listings by type to narrow down to exactly what you're looking for.</li>
            </ul>
          </div>
          <a className="home__find-btn" href="#listings">Find Your Arena</a>
        </section>
      </main>
    </div>
  );
}

export default Home;
