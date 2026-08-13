import {createContext} from 'react';
import {Indicador} from '../Models/Indicador';
import {EntradaBitacora} from '../Models/EntradaBitacora';
import {Mascota} from '../Models/Mascota';


export const MascotaContext = createContext({

  nombre: '',
  necesitaAyuda: false,
  puedeJugar: false,
  estadoAnimo:"",
  indicadores : [] as Indicador[],
  mascotas : [] as Mascota[],
  alternarModoNoche: () => {},
  alimentar: () => {},
  jugar: () => {},
  descansar: () => {},
  reiniciar: () => {},

});