// import { useDispatch,} from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@material-ui/core';

let products = [{ price: 333, quantity: 1 }, { price: 455, quantity: 2 }]

const CartTotal = ({price, quantity}) => {
   const suma = price 

    
    return (
        <div>
           {suma} 
        </div>
    )
}

export default CartTotal;
