import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting='Proximamente: Tienda de Provisiones'></ItemListContainer>
      <p>Atte.: GearLara - Jr. Developer in development</p>
    </>
  );
}

export default App;
