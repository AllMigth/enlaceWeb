import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addToCart, addItem } from '../state/actions/shopping_cart';
import AddToCart from './AddToCart';

//controlar el store
const AddToCartBtn = ({ sku }) => {
    //pasamos el sku para saber que tenermos  que agregar al carrito
    /*Como hacer dispatch
    tengo una funcion dispatch*/
    const dispatch = useDispatch(); //hook llamado useDispatch
    const addProductToCart = (ev)=>{
        dispatch(addItem(sku));
    }

    return(
    <AddToCart addProduct = {addProductToCart} />
    )
    //onClick={redirectToCheckout} 
}

const mapStateToProps = (state) => state.shopping_cart;
export default connect(mapStateToProps, { addToCart }) (AddToCartBtn);