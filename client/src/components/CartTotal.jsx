// import { useDispatch,} from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';

let products = [{ price: 22, quantity: 2 }, { price: 33, quantity: 1 }]

const CartTotal = () => {
    // const dispatch = useDispatch();
    // const products = useSelector(state => state.cartReducer.productsInCart);
    // const user = localStorage.getItem('userId');
    // const handleGoToCheckout = () => dispatch(goToCheckout(products));
    const [ total, setTotal ] = useState();


    useEffect(() => {
        setTotal(products.reduce((acc, product) => acc + product.price * product.quantity));
    }, []);

    return (
        <Container>
            
            <Typography>Total: {total}</Typography>
             <Button> Comprar </Button>
        </Container>
    );
};

export default CartTotal;
