import { NavLink } from "react-router-dom";
import { useCarritoStore } from "../store/CarritoStore.js";
import "../styles/navbar.css";
export const Navbar = () => {
  const totalItems = useCarritoStore((state) => state.getTotalItems());

  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Productos
      </NavLink>

      <NavLink
        to="/carrito"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Carrito ({totalItems})
      </NavLink>
    </nav>
  );
};
