function Saludo2 (props){
    return(
     <div>
      <h1> Hola React </h1>
      <h2> Soy {props.nA} </h2>
      <h2>{props.aA}</h2>
      <p>Tengo {props.edad} años</p>
     </div>
    )
}

export default Saludo2;