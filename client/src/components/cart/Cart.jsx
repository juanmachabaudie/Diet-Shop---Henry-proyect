import React,{useEffect} from 'react'

import {Container} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import CartItem from './CartItem'
import {Button} from '@material-ui/core'
import CartTotal from './CartTotal'
import {getAllProductsInCart} from '../../redux/actions/cartActions'

const Cart = () => {
    const dispatch= useDispatch()
    const products = useSelector(state => state.cartReducers.productsInCart)


function handleDeleteCart() {
    return 'delete'
}

useEffect(() => {
    dispatch(getAllProductsInCart());     //esto va a mostrar todos los productos que tiene un usuario en su carrito
}, [ dispatch])                            //y mostraremos los items cart y el total cart 
    return (
    
        <Container>
            <Container>
             {products.map(product => <CartItem product={product}/>)}
            </Container> 
                <Container>
                    <Button onClick={handleDeleteCart}>Eliminar Carrito</Button>
                </Container> 
                    <Container>
                        <CartTotal />
                    </Container>
        </Container>
    )
}

export default Cart
