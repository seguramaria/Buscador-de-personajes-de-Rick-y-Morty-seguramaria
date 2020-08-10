import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../stylesheets/Characters.scss';
import ImageHome from '../../images/rickmortyanimation.gif';

const CharacterDetail = (props) => {
  //PREVENT DEFAULT
  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };

  //TRADUCCIONES:
  const getStatus = () => {
    if (props.status === 'Alive') {
      return 'Vivo';
    } else if (props.status === 'Dead') {
      return 'Muerto';
    } else {
      return 'Desconocido';
    }
  };
  const getSpecies = () => {
    if (props.species === 'Human') {
      return 'Humano';
    } else if (props.species === 'Alien') {
      return 'Alienígena';
    }
  };
  const getGender = () => {
    if (props.gender === 'Female') {
      return 'Femenino';
    } else if (props.gender === 'Male') {
      return 'Masculino';
    } else {
      return 'Desconocido';
    }
  };

  const getOrigin = () => {
    if (props.origin === 'unknown') {
      return 'Desconocido';
    } else {
      return props.origin;
    }
  };

  return (
    <Link to="/App" className="modal__link">
      <div className="modal">
        <div className="modal__dialog">
          {/* todo el contenido del modal tiene un prevent default que hace que no se dirija a la home al clicar */}
          <div className="modal__content" onClick={handleModalContentClick}>
            <header className="modal__header">
              <div className="modal__img-container">
                <img
                  className="modal__img"
                  src={props.image}
                  alt="Imagen de {props.name}"
                />
              </div>
              <h2 className="modal__title">{props.name}</h2>
            </header>

            <ul className="modal__ul">
              <li className="modal__ul-li">
                <span className="modal__ul-li-span-1"> Especie:</span>
                <span className="modal__ul-li-span-2"> {getSpecies()}</span>
              </li>
              <li className="modal__ul-li">
                <span className="modal__ul-li-span-1"> Origen: </span>
                <span className="modal__ul-li-span-2"> {getOrigin()}</span>
              </li>
              <li className="modal__ul-li">
                <span className="modal__ul-li-span-1"> Estado:</span>
                <span className="modal__ul-li-span-2"> {getStatus()}</span>
              </li>
              <li className="modal__ul-li">
                <span className="modal__ul-li-span-1"> Género:</span>
                <span className="modal__ul-li-span-2"> {getGender()}</span>
              </li>
              <li className="modal__ul-li">
                <span className="modal__ul-li-span-1">
                  Número de episodios:
                </span>
                <span className="modal__ul-li-span-2"> {props.episodes}</span>
              </li>
            </ul>
          </div>
          <Link to="/App" className="modal__close">
            <div className="modal__close-img-container">
              <img
                src={ImageHome}
                className="modal__close-img"
                alt="volver a la página principal"
              ></img>
            </div>
            <p className="modal__close-p">Vuelve a inicio</p>
          </Link>
        </div>
      </div>
    </Link>
  );
};

CharacterDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  origin: PropTypes.object,
  episode: PropTypes.array,
};

export default CharacterDetail;
