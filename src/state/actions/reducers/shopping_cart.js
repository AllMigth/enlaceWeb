import { ADD_ITEM } from "../../actionTypes";

//son funciones puras 
//cualquier cosas externa a la funcion no se puede modificar 

//ESTO ES UN EJEMPLO DE REDUCER

export default function(state = {}, action){
  if (action.type === ADD_ITEM){
		return {shooping_cart: state.shopping_cart.concat([action.payload])}
	}

	return state;
}