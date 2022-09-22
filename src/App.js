
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
//import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer';
import NavBoost from './componentes/NavBoost';
import ItemCount from './componentes/ItemCount';
import ItemDetailConteiner from './componentes/ItemDetailConteiner';
import Checkout from './componentes/Checkout';
import Cart from './componentes/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBoost/>
      <Routes>
        <Route path="/" eLement= {<ItemListContainer/>} />
        <Route path="/categoria/:categoriaId" eLement= {<ItemListContainer/>} />
        <Route path="/item/:idItem" eLement= {<ItemDetailConteiner/>} />
        <Route path="/checkout" eLement= {<Checkout/>} />
        <Route path="/cart" eLement= {<Cart/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  );   
}

export default App;

