
import React,{useEffect} from 'react'

import {Container} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import CartItem from './CartItem'
import {Button} from '@material-ui/core'
import CartTotal from './CartTotal'
//import {getAllProductsInCart} from '../../redux/actions/cartActions'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
    cart: {
     marginLeft: '0px'

    }
})


const Cart = () => {
    const dispatch= useDispatch()
    
    let products= [
       { img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/030/products/dale-coco-leche-de-coco1-b4cb1c8d1424b2978115936240124870-1024-1024.png',
        name: 'leche de soja',
        price: 333,
        quantity: 0 },
        {
            img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/860/030/products/dale-coco-leche-de-coco1-b4cb1c8d1424b2978115936240124870-1024-1024.png',
            name: 'leche de almendra',
            price : 455,
            quantity: 0
        }
    ]


const classes = useStyle()

// useEffect(() => {
//     dispatch(getAllProductsInCart());     //esto va a mostrar todos los productos que tiene un usuario en su carrito
// }, [ dispatch])                            //y mostraremos los items cart y el total cart 
    return (
    
        <Container className={classes.cart}>
            <h4>mis productos</h4> <hr/>
            <Container>
                <Container>
                   {products.map(product =><CartItem product={product} /> )} 
                    </Container>
                 
            </Container> 
            <hr/>
            <Button variant='contained'>Eliminar Carrito</Button>
                    <Container>
                        <CartTotal />
                    </Container>
        </Container>
    )
}

export default Cart
