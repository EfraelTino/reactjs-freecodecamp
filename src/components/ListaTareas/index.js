import React, { useState } from 'react';
import './listatareas.css'
import { Formulario } from "../Formulario";
import { Tareas } from '../Tareas/Tareas';


function ListaTareas() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        //verificamos que si el input no esta vacia
        if (tarea.texto.trim()) {
            //trim nos permite quitar espacios al principio y al final
            tarea.texto = tarea.texto.trim();
            //Tomamos el estado actual de las tareas y lo convertimos en un objeto y lo agregamos al principio y con el operador spreat tomamos las tareas anteriores y convertimos de unarreglo a objetos individuales
            const tareasActualziadas = [tarea, ...tareas];
            setTareas(tareasActualziadas);
        }
        }
        //la tarea lo obtenemos con el id
        const eliminarTarea = id => {
            // lo filtramos
            const tareasActualziadas = tareas.filter(tarea => tarea.id !== id);
            setTareas(tareasActualziadas); 
    };
    const completarTarea = id =>{
        const tareasActualziadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completado = !tarea.completado;
            }
            return tarea;
        });
        setTareas(tareasActualziadas);
    }

    return (
        <div className="tareas-lista-princiapl">
            <h1> Lista de Tareas</h1>
            <Formulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tareas
                            key={tarea.id}
                            //Para que  react sepa el oden y no los cambie al actualizar pasamos el key
                            id={tarea.id}
                            texto={tarea.texto}
                            completado={tarea.completado}
                            eliminarTarea={eliminarTarea}
                            completarTarea = {completarTarea}
                        />
                    )
                }
            </div>
        </div>
    );
}


export { ListaTareas };