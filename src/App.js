import React, { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [busqueda, setBusqueda] = useState("");
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de Imágenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
    </div>
  );
}

export default App;
