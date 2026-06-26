import React from 'react';

function TarjetaNoticia({ info }) {
  return (
    <div className="card">
      <h3 className="card-title">{info.title}</h3>
      <p className="card-body">{info.body}</p>
      <button className="card-button">Leer más</button>
    </div>
  );
}

export default TarjetaNoticia;