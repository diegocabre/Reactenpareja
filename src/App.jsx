import './App.css'
import RedesSociales from './components/RedesSociales'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="contenedor">
      <h1 className='titulo'>Crea una Cuenta</h1>
      <RedesSociales />
      <h2 className="subtitulo">o usa tu e-mail para registrarte</h2>
      <Formulario />
    </div>
  )
}

export default App
