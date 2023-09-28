import { useState } from "react";
import { Alerta } from "./Alerta";

export const Formulario = () => {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        pass: '',
        repass: ''
    });
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const [alerta, setAlerta] = useState('');
    const [tipo, setTipo] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        if (form.pass !== form.repass) {
            setAlerta('Las contraseñas no coinciden');
            setTipo('danger');
        } else if (form.nombre === '' || form.email === '' || form.pass === '') {
            setAlerta('Todos los campos son obligatorios');
            setTipo('danger');
        } else {
            setAlerta('¡Tu registro fue exitoso!');
            setForm({
                nombre: '',
                email: '',
                pass: '',
                repass: ''
            })
            setTipo('success');
        }
    }
    return (
        <div>
            <form className="formulario" onSubmit={onSubmit}>
                <input type="text" name="nombre" placeholder="Escribe tu nombre" onChange={onChange} />
                <input type="email" name="email" placeholder="correo@example.com" onChange={onChange} />
                <input type="password" name="pass" placeholder="Escribe tu contraseña" onChange={onChange} />
                <input type="password" name="repass" placeholder="Repite tu contraseña" onChange={onChange} />
                <button type="submit">Registrar</button>
            </form>
            {alerta && <Alerta type={tipo} message={alerta} />}
        </div>
    );
}
