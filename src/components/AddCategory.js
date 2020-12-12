import React, { useState } from "react";
//Importamos PropTypes para requerir que utilicen nuestro componente con los argumentos que estoy esperando
import PropTypes from "prop-types";

//Desestructuro y solo traigo las funciones que queremos, las pasamos por argumento
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  //La función para guardar
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validación para que no me tome valores vacios
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [inputValue, ...cat]); //El input que cogemos abajo value=
      //Para reiniciar el input
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Busca tu Gif"
      />
    </form>
  );
};

//Aplicacmos el PropTypes para requerir la función setCategories siempre.
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
