
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
//import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer';
import NavBoost from './componentes/NavBoost';
import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Checkout from './componentes/Checkout';
import Cart from './componentes/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBoost/>
      <Routes>
        <Route path="/" element= {<ItemListContainer/>} />
        <Route path="/categoria/:categoriaId" eLement= {<ItemListContainer/>} />
        <Route path="/item/:idItem" element= {<ItemDetailContainer/>} />
        <Route path="/checkout" element= {<Checkout/>} />
        <Route path="/cart" element= {<Cart/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  );   
}

export default App;

