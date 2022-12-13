import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // el useEffect es un kook de React que sirve para ejecutar efectos secundarios(proceso que quiera ejecutar cuando algo suceda)
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
    </>
  );
};
