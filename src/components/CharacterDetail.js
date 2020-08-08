import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  return (
    <Link to="/">
      <div className="modal">
        <div className="modal__dialog">
          {/* todo el contenido del modal tiene un prevent default que hace que no se dirija a la home al clicar */}
          <div className="modal__content" onClick={handleModalContentClick}>
            <header className="modal__header">
              <h2 className="modal__title">{props.name}</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
            <section>
              <img className="card__img" src={props.image} alt="" />
              <ul className="ul_modal">
                <li>Especie: {props.species} </li>
                <li>Origen: {props.origin} </li>
                <li>Estado: {props.status} </li>
                <li>Género: {props.gender} </li>
                <li>
                  Número de episodios en los que aparece: {props.episodes}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterDetail;
