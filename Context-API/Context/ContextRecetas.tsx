import { createContext } from "react";
import { Receta} from "../Models/Receta";


export const ContextRecetas = createContext({
    recetas: [] as Receta[],
    agregarReceta: (receta: Receta) => { },
    eliminarReceta: (id: number) => { },
    buscarReceta: (id: number): Receta | undefined => undefined
});
