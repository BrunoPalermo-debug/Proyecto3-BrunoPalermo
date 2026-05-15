import { Link } from "react-router-dom";
import { useCarritoStore } from "../store/CarritoStore.js";

export const Navbar = () => {
  const totalItems = useCarritoStore((state) => state.getTotalItems());

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Link to="/">Productos</Link>
      <Link to="/carrito">Carrito ({totalItems})</Link>
    </nav>
  );
};
