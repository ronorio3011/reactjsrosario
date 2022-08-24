
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
//import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer';
import NavBoost from './componentes/NavBoost';

function App() {
  const saludo = 'Bienvenidos'

  return (
    <>
      <NavBoost/>
      <h2> </h2>
       <ItemListContainer saludo={saludo} greeting ='Elige tu Producto' />
    </>
  );
     
}

export default App;

