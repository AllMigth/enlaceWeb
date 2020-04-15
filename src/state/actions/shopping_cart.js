//AQUI ESTAN LAS ACCIONES QUE TIENEN QUE VER CON EL CARRITO DE COMPRAS
//action creators for shopping_cart
//Funcion que retornan accinoes
/**
este es el formato de una accion en redux
{ type: '', payload: {}}
*/
//recibe el item, en nuestra aplicacion se llaman productos
import { ADD_ITEM } from "../actionTypes";

export const addItem = (product) => {
    return{
        type: ADD_ITEM,
        payload: product
    }
}