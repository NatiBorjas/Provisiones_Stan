import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>

      <footer>
      <p>Atte.: GearLara - Jr. Developer in development</p>
      </footer>
    </>
  );
}

export default App;
