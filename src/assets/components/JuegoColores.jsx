import { useEffect, useState } from 'react';

function JuegoColores() {
    const colores = ['#007bff', '#ea0b21ff', '#29a783', '#fffb00ff', '#81bd', '#9ed2ffff', '#a2ff00ff', '#ff8800ff'];
    const [colorDeBotones, setColorDeBotones] = useState(colores.slice(0, 5));
    const [mensaje, setMensaje] = useState('');
    const [contador, setContador] = useState(0);
    const [segundos, setSegundos] = useState(0);


    //useEffect
    useEffect(() => {
        console.log(contador);
        setMensaje(`Intentos ${contador}`);
        const intervalo = setInterval(()=>{
            setSegundos(s => s+1);
        },1000);
        return() => {
            clearInterval(intervalo);
            setSegundos(0);
        }
    }, [contador]);

    const manejarClick = () => {
        const coloresNuevos = colorDeBotones.map(() => {
            const indiceAleatorio = Math.floor(Math.random() * colores.length);
            return colores[indiceAleatorio]
            
        });
        setColorDeBotones(coloresNuevos);
        setContador(contador+1);
    };

    return (
        <div>
            <h1>Juego de Colores</h1>
            <p>Presiona cualquier boton para cambiar los colores. Si dos o mas coinciden, ganas </p>
            <div>
                {colorDeBotones.map((c, i) => (
                    <button
                        key={i}
                        onClick={manejarClick}
                        style={{ backgroundColor: c }}
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