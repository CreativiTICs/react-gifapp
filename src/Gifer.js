import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const Gifer = () => {
  //   const categories = ["Baila", "Ríe", "Duerme", "Estudia"];
  //Hooks
  const [categories, setCategories] = useState([""]);

  // Función para evento onClick, agrega una categoría
  //   const handleAdd = () => {
  //     setCategories([...categories, "Esperar"]);
  //     // otra forma setCategories(cat => [...cat, 'Esperar']);
  //   };

  return (
    <div>
      <h2>Gifer Tu Buscador de GIF'S</h2>
      {/* Acá le pasamos las props al componente */}
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {/* Función map recorre el objeto y devuelve los elementos */}
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
