function Saludo2 (props){
    return(
     <div className="container mt-5">
      <h1 className="mb-4"> Hola </h1>
      <h2 className="mb-4"> {props.nA} </h2>
      <h2 className="mb-4">Somos {props.aA}</h2>
      <p>Tengo {props.edad} años</p>
     </div>
    )
}

export default Saludo2;