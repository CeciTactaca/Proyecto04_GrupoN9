import { useState } from "react";
import Mensaje from "./components/Mensaje.jsx";
import Botones from "./components/Botones.jsx";
import InputNumero from "./components/InputNumero.jsx";

function App() {
  const [numeroSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [intento, setIntento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const verificar = () => {
    if (juegoTerminado) return;

    const num = parseInt(intento, 10);
    if (isNaN(num)) {
      setMensaje("⚠️ Por favor, ingresa un número válido.");
      return;
    }

    setIntentos((prev) => prev + 1);

    if (num === numeroSecreto) {
      setMensaje(
        `🎉 ¡Acertaste! El número era ${numeroSecreto}. 
        Cantidad de intentos: ${intentos + 1}`
      );
      setJuegoTerminado(true);
    } else if (num < numeroSecreto) {
      setMensaje(`El número ${num} es muy bajo`);
    } else {
      setMensaje(`El número ${num} es muy alto`);
    }
  };

  const rendirse = () => {
    setMensaje(`😢 Te rendiste. El número era ${numeroSecreto}.`);
    setJuegoTerminado(true);
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-primary mb-3">Adivina el número</h1>

        {!juegoTerminado && (
          <>
            <p className="text-muted text-center">
              Ingresa un número entre 1 y 100
            </p>
            <p className="fw-bold text-center">Intentos: {intentos}</p>

            <InputNumero intento={intento} setIntento={setIntento} />

            <Botones verificar={verificar} rendirse={rendirse} />
          </>
        )}

        <Mensaje mensaje={mensaje} />
      </div>
    </div>
  );
}

export default App;
