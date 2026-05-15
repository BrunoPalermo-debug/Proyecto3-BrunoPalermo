import { create } from "zustand";
export const useCarritoStore = create((set, get) => ({
  //Estado
  items: [],
  //ID, Nombre, Precio, Cantidad, Total

  //acciones
  /**
   *
   * @param {Object} producto - El producto a agregar al carrito
   * @returns
   */
  agregarProductos: (producto) =>
    set((state) => {
      const existe = state.items.find((item) => item.id === producto.id);

      if (existe) {
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { ...producto, cantidad: 1 }],
      };
    }),
  /**
   *
   * @param {number} productoId
   * @returns
   */
  eliminarProducto: (productoId) =>
    set((state) => ({
      item: state.items.filter((item) => item.id !== productoId),
    })),
  actualizarCantidad: (productoId, cantidad) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productoId ? { ...item, cantidad: cantidad } : item,
      ),
    })),

  vaciarCarrito: () => set({ items: [] }),

  getTotalItems: () => {
    const state = get();
    return state.items.reduce(
      (accumulator, item) => accumulator + item.cantidad,
      0,
    );
  },
  getTotalPrecio: () => {
    const state = get();
    return state.items.reduce(
      (acc, item) => acc + item.price * item.cantidad,
      0,
    );
  },
}));
