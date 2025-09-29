import { useState } from 'react'
import Saludo from './assets/components/Saludo.jsx'

function App() {

  //variables
  let nombre = 'nombre';
  let apellido = 'apellido';
  let edad = 20;

  return (
    <>
     <Saludo nA ={nombre} aA={apellido} edad={edad}></Saludo>
    </>
  )
}

export default App
