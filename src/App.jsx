import './App.css'
import Formulario from './components/Formulario'
import Registro from './components/Registro'

function App() {
  return (
    <div className="contenedor">
      <h1 className='titulo'>Crea una Cuenta</h1>
      <Registro />
      <h2 className="subtitulo">o usa tu e-mail para registrarte</h2>
      <Formulario />
    </div>
  )
}

export default App
