import React, { useState } from "react";
import './Formulario.css'
import {v4 as uuidv4} from 'uuid'

function Formulario(props) {

    const [input, setInput] = useState (''); 

    const manejarCambio = e =>{
        // Esto nos permite extrarer el valor que se ingresa por el input 
        setInput(e.target.value);
    };
    const manejarEnvio = e =>{
        // Para que cuando enviemos no se vuelva a cambiar la pagina
        e.preventDefault();

        //Cuando enviamos el formulario el pbjeto que representa la tarea nueva
        const tareaNueva ={
            // Generamos un identificador unico con un paquete nuevo
            id : uuidv4(),
            texto: input,
            completado: false,
        };
        //tareaNueva se pasa como argumento que va a resivir nuestra ListaTareas.js
        props.onSubmit(tareaNueva);
    };
    return (
        <form className="tarea-formulario"
        onSubmit={manejarEnvio}
        >
            <input
                className="tarea-input"
                type='text'
                placeholder='Ingresar una tarea'
                name="text"
                onChange={ manejarCambio }
            />
            <button className="tarea-boton"
            >
            Agregar Tarea
            </button>
        </form>
    );
}

export { Formulario };