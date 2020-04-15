import React from 'react';

/**
 * este componente se encarga de desplegar el boton
 * y de mandar a llamar la funcion que le digan cuando haga click
 */

export default ({addProduct}) => {
    return(
       <button
       onClick = {addProduct}
       className = "app-btn text-xl">
           Agregar al carrito
       </button>
    )
}