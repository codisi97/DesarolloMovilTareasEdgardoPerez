import { createContext } from "react";
import { Producto } from "../Models/Producto";

export const ContextProducto = createContext({

  listaProductos: [] as Producto[],
  setListaProductos: (productos: Producto[]) => { },
  agregarProducto: (producto: Producto) => { },
  obtenerProductos: () => { }

})