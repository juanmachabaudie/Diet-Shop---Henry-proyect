
import React,{useEffect} from 'react'
import {Container} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import CartItem from '../components/CartItem'
import {Button} from '@material-ui/core'
import CartTotal from '../components/CartTotal'
import {makeStyles} from '@material-ui/core/styles'

import {cartReset} from '../redux/actions/cartActions'

const useStyle = makeStyles({
    cart: {
     marginLeft: '0px'

    }
})


const Cart = () => {
    const classes = useStyle()

const dispatch= useDispatch()
const products = useSelector(state => state.cart.cartItems)



const handleDeleteCart = () => dispatch(cartReset())

//esto va a mostrar todos los productos que tiene un usuario en su carrito//y mostraremos los items cart y el total cart 
    return (
    
        <Container className={classes.cart}>
            <div><h4>mis productos</h4></div> <hr/>
            <Container>
                <Container>
                   {products.map(product =><CartItem product={product} /> )} 
                    </Container>
                 
            </Container> 
            <hr/>
            <Button variant='contained' onClick={handleDeleteCart}>Vaciar Carrito</Button>
                    <Container>
                      {products.map(data => {
                          return(
                              <CartTotal 
                              price={data.price}
                              quantity={data.quantity}
                              />
                          )
                      })}
                      
                    </Container>
        </Container>
    )
}

export default Cart
