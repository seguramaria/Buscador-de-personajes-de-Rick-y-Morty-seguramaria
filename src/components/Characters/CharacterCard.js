import React from 'react';
// import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  //como viene en inglés, vamos a traducirlo con un condicional:
  const getStatus = () => {
    if (props.character.status === 'Alive') {
      return 'Vivo';
    } else if (props.character.status === 'Dead') {
      return 'Muerto';
    } else {
      return '¿?';
    }
  };

  //como viene en inglés, vamos a traducirlo con un condicional:
  const getSpecies = () => {
    if (props.character.species === 'Human') {
      return 'Humano';
    } else if (props.character.species === 'Alien') {
      return 'Alien';
    } else {
      return '¿?';
    }
  };

  return (
    <li className="card">
      {/* <Link to={`/chracter/${props.character.id}`}> */}
      <img
        className="card__img"
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
      />
      <h4 className="card__title">{props.character.name}</h4>
      <p className="card__description">
        {getSpecies()} / {getStatus()}
      </p>
      {/* </Link> */}
      <button className="card__btn">
        <p>Conoce más sobre {props.character.name}</p>
      </button>
    </li>
  );
};

export default CharacterCard;
