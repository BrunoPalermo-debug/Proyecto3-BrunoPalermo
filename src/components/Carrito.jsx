import { useCarritoStore } from "../store/CarritoStore.js";
import "../Styles/carrito.css";

export const Carrito = () => {
  const items = useCarritoStore((state) => state.items);
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);
  const total = useCarritoStore((state) => state.getTotalPrecio());

  if (items.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div className="carrito-container">
      <h2>Carrito</h2>

      {items.map((item) => (
        <div key={item.id} className="carrito-item">
          <img src={item.image} alt={item.title} className="carrito-img" />

          <div className="carrito-info">
            <h4>{item.title}</h4>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.cantidad}</p>

            <button
              className="carrito-btn"
              onClick={() => eliminarProducto(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <div className="carrito-total">Total: ${total}</div>

      <button className="carrito-btn" onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </div>
  );
};
