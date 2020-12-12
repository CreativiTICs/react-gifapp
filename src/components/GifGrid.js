import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  //Custom Hook
  const { data, loading } = useFetchGifs(category);

  //   //Hook
  //   const [images, setImages] = useState([]);
  //   //El useEffect evita que se generen peticiones infinitas a la api
  //   useEffect(() => {
  //     getGifs(category).then(setImages);
  //   }, [category]); //Arreglo de dependencias se dispara solo una vez (ComponentDidMount)

  return (
    <>
      <h3 className="title animate__animated animate__bounce animate__delay-0.7s">
        {category}
      </h3>
      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}
      <div className="card-grid">
        {data.map((gif) => (
          //   Se usa el {...props} para enviar cada una de las propiedades de las props independiente
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
