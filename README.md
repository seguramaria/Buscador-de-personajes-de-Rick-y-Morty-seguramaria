<img src="https://raw.githubusercontent.com/seguramaria/Buscador-de-personajes-de-Rick-y-Morty-seguramaria/master/src/images/1.png" width="150"/>

# Buscador de personajes de Rick y Morty 👽🚀

## Página web en React

El proyecto consiste en desarrollar una página web con un **listado de personajes de Rick and Morty**, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.
Las distintas partes del proyecto son:

1.  ### Listado de personajes

En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty.
Para eso, vamos a utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar :
🔹 Foto
🔹 Nombre
🔹 Especie

2.  ### Filtrado de personajes

Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. Ejemplo: al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.
El input tiene en cuenta si las letras están en mayúscula / minúscula para la búsqueda.

3.  ### Componentes del listado de personajes

    El listado tiene los siguientes componentes como mínimo:

        ✔️Componentes para los filtros

        ✔️Componente para el listado

        ✔️Componente para la tarjeta de cada personaje del listado

        ✔️ Componente para el detalle de cada personaje

4.  ### Detalle de personajes

Al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router.
En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está **vivo 💃 o muerto💀**.

5.  ### Detallitos de calidad
    Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta **form**.

- Si estando en el campo de filtrado pulsamos intro impedimos que el navegador navegue o cambie la ruta sin querer.
- Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se muestra un mensaje para avisar del error.
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.
- Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto muestra el texto que tenía anteriormente.

6.  ### Mejoras visuales

    Algunas mejoras visuales implantadas:

          🌀 Mostrar la especie de un personaje lo hacemos con un icono.
          🌀 Uso de sistema de grid para pintar el listado de personajes.
          🌀 Diseño responsive
          Diseño responsive:

    <img src="https://raw.githubusercontent.com/seguramaria/Buscador-de-personajes-de-Rick-y-Morty-seguramaria/src/images/responsive/16.png" width="200"/>
    <img src="https://raw.githubusercontent.com/seguramaria/Buscador-de-personajes-de-Rick-y-Morty-seguramaria/src/images/responsive/17.png" width="200"/>
    <img src="https://raw.githubusercontent.com/seguramaria/Buscador-de-personajes-de-Rick-y-Morty-seguramaria/src/images/responsive/18.png" width="200"/>

7.  ### URL compartible

La URL del detalle de personaje es compartible, es decir, que si visitamos esa URL directamente en el navegador se ve el detalle del personaje. Y en el caso de que el usuario navegue a una URL inexistente mostramos un mensaje de error.

8.  ### Ordenación

El listado de personajes se ordena alfabéticamente por nombre.

Enlace a GitHub Pages para ver el resultado: http://beta.adalab.es/modulo-3-evaluacion-final-seguramaria/#/


#### Wubba Lubba Dub Dub!!
