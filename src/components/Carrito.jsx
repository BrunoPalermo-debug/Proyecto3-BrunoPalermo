import { useCarritoStore } from "../store/CarritoStore.js";

export const Carrito = () => {
  const items = useCarritoStore((state) => state.items);
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto);
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito);
  const total = useCarritoStore((state) => state.getTotalPrecio());

  if (items.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div>
      <h2>Carrito</h2>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h4>{item.title}</h4>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.cantidad}</p>

          <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
};
