import {useState} from 'react';

function JuegoColores(){
    const colores = ['#007bff', '#dc3545', '#29a783', '#1fd71fff', '#81bd', '#6c757d'];
    const [colorDeBotones, setColorDeBotones] = useState(colores.slice(0, 5));
    const [segundos, setSegundos] = useState (0);

    const manejarClick = () => {
        const coloresNuevos = colorDeBotones.map(() => {
            const indiceAleatorio = Math.floor(Math.random() * colores.length);
        });
        setColorDeBotones(coloresNuevos);
    };

    return(
            <div>
                <h1>Juego de Colores</h1>
                <p>Presiona un boton </p>
                <div>
                    {colorDeBotones.map((c, i) => (
                        <button
                            key={i}
                            onClick={manejarClickEnElBoton}
                            style={{ backgroundColor: c }}
                        >
                            Boton {i + 1}
                        </button>
                    ))}
                </div>
            </div>
    )
}