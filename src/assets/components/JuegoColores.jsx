import { useEffect, useState } from 'react';

function JuegoColores() {
    const colores = ['#007bff', '#dc3545', '#29a783', '#1fd71fff', '#81bd', '#6c757d'];
    const [colorDeBotones, setColorDeBotones] = useState(colores.slice(0, 6));
    const [mensaje, setMensaje] = useState('');
    const [contador, setContador] = useState(0);


    //useEffect
    useEffect(() => {
        console.log(contador);
        setMensaje(`Intentos ${contador}`);
        
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
            <p>Presiona un boton </p>
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
        </div>
    )
}
export default JuegoColores;