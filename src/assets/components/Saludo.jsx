function Saludo2 (props){
    return(
     <div>
      <h1> Hola </h1>
      <h2> {props.nA} </h2>
      <h2>Somos {props.aA}</h2>
      <p>Tengo {props.edad} años</p>
     </div>
    )
}

export default Saludo2;