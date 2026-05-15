import { useFetch } from "../hooks/useFetch.js";
import { useCarritoStore } from "../store/CarritoStore.js";
import "../Styles/productos.css";

export const ListadoProductos = () => {
  const {
    data: productos,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  const agregarProductos = useCarritoStore((state) => state.agregarProductos);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos</p>;

  return (
    <div className="productos-container">
      <h2>Productos</h2>

      <div className="productos-grid">
        {productos.map((prod) => (
          <div key={prod.id} className="producto-card">
            <img src={prod.image} alt={prod.title} className="producto-img" />

            <h4 className="producto-title">{prod.title}</h4>
            <p className="producto-price">${prod.price}</p>

            <button
              className="producto-btn"
              onClick={() => agregarProductos(prod)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
