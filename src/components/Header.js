import React from 'react';
import '../stylesheets/Header.scss';
import ImageTitle from '../images/wallpaper-stars-2.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <img
            className="header__title-img"
            src={ImageTitle}
            alt="Rick y Morty"
          ></img>
        </div>
        <div className="header__title-container">
          <h2 className="header__title-container-h2">Rick y Morty</h2>
          <p className="header__title-container-p">
            ¡Busca tu personaje favorito!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
