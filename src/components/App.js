import React from 'react';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/getDataFromApi';

getDataFromApi().then((data) => {
  console.log(data);
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty App</h1>
      </header>
      <main>
        <section className="cards"></section>
      </main>
    </div>
  );
}

export default App;
