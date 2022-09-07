
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
//import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer';
import NavBoost from './componentes/NavBoost';
import ItemCount from './componentes/ItemCount';
import ItemDetailConteiner from './componentes/ItemDetailConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const saludo = 'Bienvenidos'

  return (
    <BrowserRouter>
      <NavBoost/>
         <Routes> 
          <Route path= '/' eLement={<ItemListContainer saludo={saludo}  greeting='Elige tu Producto' />}/>
          <Route path= '/detalle' eLement={ItemDetailConteiner}  ></Route>
         </Routes>
      <ItemCount/>
      
      <ItemDetailConteiner/>

    </BrowserRouter>
  );
     
}

export default App;

