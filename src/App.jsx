import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./components/Carrito/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./componentes/Checkout/Checkout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Tiens: ¡Deseándoles a todos un excelente fin de semana!" />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenidos a Tiens" />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={ <div>Pagina no encontrada</div> } />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
