import React from 'react';
import './Tareas.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tareas ({ id, texto, completado, completarTarea, eliminarTarea  }){
    return(
        <div className= {completado ?'tarea-contenedor completado' : 'tarea-contenedor'}>
            <div className='tarea-texto'
            onClick={() => completarTarea(id)}>
                { texto }
            </div>
            <div className='tarea-contenedor-iconos'
            onClick={()=>eliminarTarea(id)}>
                <AiOutlineCloseCircle className= 'tarea-icono'/>
            </div>
        </div>
    );
}


export { Tareas };