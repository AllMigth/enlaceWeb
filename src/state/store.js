import { createStore, compose } from "redux";

export default ()  => createStore(
    (state) => state,
    {},
    compose(
        window.devToolsExtension ? window.devToolsExtension( ) : f => f
    )
);


/*
AQUI VAMOS A EXPORTAR UNA FUNCION QUE VA A RETORNAR EL STORE
*/