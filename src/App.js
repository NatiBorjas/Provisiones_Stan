import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { Contacto } from "./components/Contacto";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category' element={<ItemListContainer/>}/>
          <Route path='/item' element={<ItemDetailContainer/>}/>
          <Route path='/items/:itemId' element={<ItemDetail/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>

      <footer>
      <p>GearLara - Jr. Developer in development</p>
      </footer>
    </>
  );
}

export default App;
