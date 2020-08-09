import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Characters.scss';
import HumanIcon from '../../images/einstein.svg';
import AlienIcon from '../../images/monster.svg';
import UnknownIcon from '../../images/unknown.svg';

const CharacterCard = (props) => {
  //voy a cambiar el resultado de la especie poniendo un icono con un condicional:
  const getSpecies = () => {
    if (props.species === 'Human') {
      return HumanIcon;
    } else if (props.species === 'Alien') {
      return AlienIcon;
    } else {
      return UnknownIcon;
    }
  };
  console.log(getSpecies());
  return (
    <Link to={`/character/${props.id}`} className="charactercard">
      <li className="charactercard" id={props.id}>
        <div className="charactercard__img-container">
          <img
            className="charactercard__img"
            src={props.image}
            alt={`Foto de ${props.name}`}
          />
        </div>
        <div className="charactercard__description">
          <h4 className="charactercard__title">{props.name}</h4>
          <div className="charactercard__icon-container">
            <img
              clasName="charactercard__icon"
              src={getSpecies()}
              alt="Especie"
            ></img>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default CharacterCard;
