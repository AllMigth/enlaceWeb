import { createStore, compose } from "redux";
import shopping_cart from "./actions/reducers/shopping_cart";

export default ()  => createStore(
    shopping_cart,
    {shopping_cart : []},
    compose(
        //insertar un middleware
        window.devToolsExtension ? window.devToolsExtension( ) : f => f
        //aqui podemos agregar mas plugins
    )
);


/*
AQUI VAMOS A EXPORTAR UNA FUNCION QUE VA A RETORNAR EL STORE
*/