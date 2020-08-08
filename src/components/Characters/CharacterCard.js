import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  //como viene en inglés, vamos a traducirlo con un condicional:
  const getStatus = () => {
    if (props.status === 'Alive') {
      return 'Vivo';
    } else if (props.status === 'Dead') {
      return 'Muerto';
    } else {
      return '¿?';
    }
  };

  //como viene en inglés, vamos a traducirlo con un condicional:
  const getSpecies = () => {
    if (props.species === 'Human') {
      return 'Humano';
    } else if (props.species === 'Alien') {
      return 'Alienígena';
    } else {
      return '¿?';
    }
  };

  return (
    <li className="card" id={props.id}>
      <img
        className="card__img"
        src={props.image}
        alt={`Foto de ${props.name}`}
      />
      <h4 className="card__title">{props.name}</h4>
      <p className="card__description">
        {getSpecies()} / {getStatus()}
      </p>

      <Link to={`/character/${props.id}`} className="card__btn">
        <p>Conoce más sobre {props.name}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
