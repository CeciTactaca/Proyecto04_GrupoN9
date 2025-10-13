import { useState } from 'react'
import Saludo from './assets/components/Saludo.jsx'
import JuegoColores from './assets/components/JuegoColores.jsx';
import {Container, Row, Col} from 'react-bootstrap'
import AdivinaNumero from './assets/components/AdivinaNumero/AdivinaNumero.jsx';
import './assets/css/App.css';


function App() {

  //variables
  let nombre = 'Profesores';
  let apellido = 'El grupo 9';
  let edad = 20;

  
  return (
    <Container className="contenedor">
      <Row>
        <Col> 
          <Saludo nA={nombre} aA={apellido} edad={edad}></Saludo>
        </Col>
        <Col>
          <JuegoColores />
          <AdivinaNumero />
        </Col>
      </Row>
    
    </ Container>
  )
}

export default App
