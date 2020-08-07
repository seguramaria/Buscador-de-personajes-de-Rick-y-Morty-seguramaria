const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      //Filtramos el objeto para conseguir la propiedad de los personajes
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          episodes: character.episode.length,
          gender: character.gender,
          image: character.image,
        };
      }); //Retornamos los datos con los que vamos a trabajar. Filtraremos aquí directamente los datos si hay un NULL hacer un ternario IMPORTANTE!!!!!!!
    });
};
export default getDataFromApi;
