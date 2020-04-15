/*
ESTE ARCHIVO NOS VA a sservir para que gatsby 
sepa que al elemento root 
lo tiene que envolver con el elemento provider de react redux
para qur todos nuestros componentes tengan acceso a el store
par ahacer eso tenemos una funcion
*/
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './state/store'

export default ({element}) => {
    const store = createStore();
    return <Provider store={store}>{element}</Provider>
}
//tenemos que enlazar esta funcion con gatsby 
