import { useState } from 'react'
import Saludo from './assets/components/Saludo.jsx'
import JuegoColores from './assets/components/JuegoColores.jsx';
import {Container, Row, Col} from 'react-bootstrap'


function App() {

  //variables
  let nombre = 'EL GRUPO 9';
  let apellido = 'apellido';
  let edad = 20;

  return (
    <>
    <Container>
      <Row>
      <Col><Saludo nA ={nombre} aA={apellido} edad={edad}></Saludo></Col>
      </Row>
      <Row>
      <Col><JuegoColores /></Col>
      </Row>
    </Container>
     
     
    </>
  )
}

export default App
