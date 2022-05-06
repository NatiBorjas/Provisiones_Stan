import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto } from "./components/Contacto";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/items' element={<ItemListContainer/>}/>
          <Route path='/items/:itemId' element={<ItemDetailContainer/>}/>
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
