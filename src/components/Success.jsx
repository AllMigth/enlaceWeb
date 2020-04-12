import React from 'react';
import cardSuccess from '../images/a.svg';

export default (props) => {
    return(
        <div className='card p-12 text-center'> 
        <img className="h-48 inline-block p-4 " src= {cardSuccess} alt='Tarjeta de credito con un icono de aprobacion '/>
            <p className="text-4xl mt-12 font-semibold" > Tu pago fue procesado </p>
            <p className="text">Recibiras en tu correo electronico un comprobante de pago e instrucciones adicionales</p>
        </div>
    )
}