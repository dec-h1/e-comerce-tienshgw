import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Tiens: ¡Deseándoles a todos un excelente fin de semana!" />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenidos a Tiens" />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="*" element={ <div>Pagina no encontrada</div> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
