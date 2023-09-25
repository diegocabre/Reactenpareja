import { useState } from "react"
import React, { alerta_email, alerta_nombre, alerta_pass } from "react";
import Alerta from "./Alerta";
const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const [error, setError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        

        setError(false);
        setEmail('');
        setPassword('');
        setRepassword('');
        setNombre('');
    }
    return (
        <>
            <form className="formulario" onSubmit={handleSubmit}>
            {error ? <p className="formulario__error">Todos los campos son obligatorios</p>  : null}
                <div className="formulario__grupo">
                    <input type="text" name="nombre" className="formulario__input" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="formulario__grupo">
                    <input type="email" name="email" className="formulario__input" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="formulario__grupo">
                    <input type="password" name="contraseña" className="formulario__input" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="formulario__grupo">
                    <input type="password" name="recontraseña" className="formulario__input" placeholder="Confirmar Contraseña" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                </div>
                <button className="boton" type="submit" onSubmit={handleSubmit}>Registrarse</button>
            </form>
        </>
    )
}

export default Formulario