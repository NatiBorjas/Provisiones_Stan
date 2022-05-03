import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category' element={<ItemListContainer/>}/>
          <Route path='/item' element={<ItemDetailContainer/>}/>
          <Route/>
          <Route/>
        </Routes>
      </BrowserRouter>

      <footer>
      <p>Atte.: GearLara - Jr. Developer in development</p>
      </footer>
    </>
  );
}

export default App;
