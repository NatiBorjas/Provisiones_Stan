import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contacto } from "./components/Contacto";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import './App.css';
import { CartContextProvider } from './context/CartContext';
import { AppContextProvider } from './context/AppContext';
import { Cart } from './components/Cart';
import FormularioCompra from './components/FormularioCompra';


function App() {
  return (
    <>
    <AppContextProvider>
      <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/items' element={<ItemListContainer/>}/>
              <Route path='/items/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<FormularioCompra/>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
      <footer>
      <p>GearLara - Jr. Developer in development</p>
      </footer>
    </>
  );
}

export default App;
