import { useState } from 'react'
import Saludo from './assets/components/Saludo.jsx'
import JuegoColores from './assets/components/JuegoColores.jsx';


function App() {

  //variables
  let nombre = 'nombre';
  let apellido = 'apellido';
  let edad = 20;

  return (
    <>
      <Saludo nA={nombre} aA={apellido} edad={edad}></Saludo>
      <JuegoColores />
    </>
  )
}

export default App
