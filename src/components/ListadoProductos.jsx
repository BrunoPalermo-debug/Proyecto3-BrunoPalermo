import { useFetch } from "../hooks/useFetch";
import { useCarritoStore } from "../store/CarritoStore.js";

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
          <div key={prod.id}>
            <img src={prod.image} alt={prod.title} width={100} />
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
