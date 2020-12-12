//Función para traer los gifs
export const getGifs = async (category) => {
  //Vamos a la doc de la api y configuramos con Postman lo que queremos traer
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=Dq6QeMq3lyeoxoOX8gEz2yoVkjXbMhEU`;
  const resp = await fetch(url);
  //Traemos por destructuración solo lo que necesitamos
  const { data } = await resp.json();
  // console.log(data);
  //Extraer la info mapeando el data
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      //En url ponemos el ? para condicionar si vienen imágenes, sino que no lo utilice
      url: img.images?.downsized_medium.url,
    };
  });
  // console.log(gifs);
  return gifs;
};
