import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header
        title="VENTA DE FRUTAS ORGÁNICAS 100% NATURALES Y SALUDABLES"
        subtitle="Frutas orgánicas: sabores auténticos, beneficios naturales para tu bienestar"
      />
      <NavBar />
      <div>
        <ItemListContainer greeting=" ¡Deseándoles a todos un excelente fin de semana!" />
      </div>
   
    </div>
  );
}

export default App
