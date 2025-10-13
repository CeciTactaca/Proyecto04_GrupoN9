import { useEffect, useState } from 'react';

function JuegoColores() {
    
    const colores = ['#007bff', '#dc3545', '#29a783', '#1fd71fff', '#81bd', '#6c757d'];
    const [colorDeBotones, setColorDeBotones] = useState(colores.slice(0, 5));
    const [mensaje, setMensaje] = useState('');
    const [contador, setContador] = useState(0);
    const [segundos, setSegundos] = useState(0);


    //useEffect
    useEffect(() => {
        console.log(contador);
       // setMensaje(`Intentos ${contador}`);
        const intervalo = setInterval(()=>{
            setSegundos(s => s+1);
        },1000);
        return() => {
            clearInterval(intervalo);
            setSegundos(0);
        }
    }, [contador]);

    const hayColoresRepetidos = (colores) => {
        const contadorColores = {};
        for (let color of colores) {
           contadorColores[color] = (contadorColores[color] || 0) + 1;
           if (contadorColores[color] >= 3) {
          return true;
         }
        }
       return false;
    };

    const manejarClick = () => {
        const coloresNuevos = colorDeBotones.map(() => {
            const indiceAleatorio = Math.floor(Math.random() * colores.length);
            return colores[indiceAleatorio]
            
        });
        setColorDeBotones(coloresNuevos);
        setContador(contador+1);

        if (hayColoresRepetidos(coloresNuevos)) {
            setMensaje(`¡Ganaste! Intento N° ${contador+1}`);
            setContador(0);
        } else {
            setMensaje(`Intento N° ${contador+1}`);
        }

    };

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Juego de Colores</h1>
            <p>Presiona cualquier boton para cambiar los colores. Si dos o mas coinciden, ganas </p>
            <div className="d-flex justify-content-center gap-2 mb-3">
                {colorDeBotones.map((c, i) => (
                    <button
                        className="btn text-nowrap"
                        key={i}
                        onClick={manejarClick}
                        style={{ backgroundColor: c, borderRadius: '5px', border:'none', color: 'white'}}
                    >
                        Boton {i + 1}
                    </button>
                ))}
            </div>
            <h2>{mensaje}</h2>
            <h1>{segundos}</h1>
        </div>
    )
}
export default JuegoColores;