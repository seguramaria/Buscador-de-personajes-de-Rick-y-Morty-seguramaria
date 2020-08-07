import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
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
              <li>Número de episodios en los que aparece: {props.episodes}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
