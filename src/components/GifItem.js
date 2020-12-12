import React from "react";

export const GifItem = ({ title, url }) => {
  //console.log({ id, title, url });
  return (
    <div className="card animate__animated animate__bounce animate__delay-0.5s">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
