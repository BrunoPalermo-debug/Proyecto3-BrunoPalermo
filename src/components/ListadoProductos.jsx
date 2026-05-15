import { useEffect, useState } from "react";
import axios from "axios";
import { useCarritoStore } from "../store/CarritoStore.js";

export const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const agregarProductos = useCarritoStore((state) => state.agregarProductos);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Hubo un problema al cargar los productos</p>;

  return (
    <div>
      <h2>Productos</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {productos.map((prod) => (
          <div
            key={prod.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={prod.image}
              alt={prod.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h4>{prod.title}</h4>
            <p>${prod.price}</p>

            <button onClick={() => agregarProductos(prod)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
