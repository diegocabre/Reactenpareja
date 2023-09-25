const Formulario = () => {
    return (
        <>
            <div className="contenedor_formulario">
                <form className="formulario">
                    <div className="formulario__grupo">
                        <input type="text" name="nombre" className="formulario__input" placeholder="Nombre"/>
                    </div>
                </form>
                <form className="formulario">
                    <div className="formulario__grupo">
                        <input type="email" name="email" className="formulario__input" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                </form>
                <form className="formulario">
                    <div className="formulario__grupo">
                        <input type="password" name="contraseña" className="formulario__input" placeholder="Contraseña" />
                    </div>
                </form>
                <form className="formulario">
                    <div className="formulario__grupo">
                        <input type="password" name="recontraseña" className="formulario__input" placeholder="Confirmar Contraseña"    />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario