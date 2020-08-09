import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Landing.scss';
import ImageTitle from '../images/title.png';

const Landing = () => {
  return (
    <section className="landing">
      <header className="landing__header">
        <div className="landing__title">
          <img
            className="landing__title-img"
            src={ImageTitle}
            alt="Rick y Morty"
          ></img>
        </div>
        <p className="landing__p">Buscador de personajes</p>
        <Link to="/App" className="landing__btn">
          Wubba Lubba Dub Dub!!
        </Link>
      </header>
    </section>
  );
};

export default Landing;
