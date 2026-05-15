import { Routes, Route } from "react-router-dom";
import { ListadoProductos } from "./components/ListadoProductos.jsx";
import { Carrito } from "./components/Carrito.jsx";
import { Navbar } from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ListadoProductos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
