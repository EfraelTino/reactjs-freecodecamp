import React from 'react';
import logo from '../img/Efradev.png'
import './logo.css'

function Logo () {
    return(
        <div className='efrael-logo-contenedor'>
            <img 
            src={ logo }
            className= 'efrael-logo'
            alt='Logo efrael' 
            />
        </div>
    );
}

export { Logo }