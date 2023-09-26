import './App.css'
import Formulario from './components/Formulario'
import Registro from './components/Registro'
import Alerta from "./components/Alerta"
import { useState } from "react"

function App() {
  const [alert, setAlert] = useState({
    error: "", msg: "", color: ""
  });
  return (
    <div className="contenedor">
      <h1 className='titulo'>Crea una Cuenta</h1>
      <Registro />
      <h2 className="subtitulo">o usa tu e-mail para registrarte</h2>
      {alert.msg && <Alerta color={alert.color}>{alert.msg}</Alerta>}
      <Formulario setAlert={setAlert} />
    </div>
  )
}

export default App
