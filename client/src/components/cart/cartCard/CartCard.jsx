import React, { useContext,useState, useEffect } from 'react';
import {CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart, CancelScheduleSendSharp } from '@material-ui/icons';
import Styles from './productStyle';
import {modifyQuantity} from "../../../auxiliar/functions/cartFunctions";
import { useSelector, useDispatch } from "react-redux";
import { putCartGuest, deleteCartGuest } from "../../../auxiliar/functions/CartWest";


function CartCard({product, setUpdate, update}) {
    const { id } = useSelector((state) => state.user);
    const Classes = Styles();

    const substract = async ()=>{
        if(id !== "GUEST"){
            await modifyQuantity(id,product.id,Number(product.orderLine.quantity)-1);
            setUpdate(!update)
        }else{
            await putCartGuest(product.id, Number(product.orderLine.quantity)-1)
            setUpdate(!update)
        }
    }
    const add = async ()=>{
        if(id !== "GUEST"){
            await modifyQuantity(id, product.id,Number(product.orderLine.quantity)+1);
            setUpdate(!update)
        }else{
            await putCartGuest(product.id, Number(product.orderLine.quantity)+1)
            setUpdate(!update)
        }
    }

    const remove = async ()=>{
         if(id !== "GUEST"){
            await modifyQuantity(id,product.id,Number(0));
            setUpdate(!update)
         }else{
            await deleteCartGuest(product.id)
            setUpdate(!update)
         }
    }
    
    return (
        <div className={Classes.container}>
            <div className={Classes.container1}>
                <div>
                    <img alt={product.name} className={Classes.root} src={product.image} width="75px" height="auto"/>  
                </div>
                <div className={Classes.description}>
                <Typography className={Classes.name}>{product.name}</Typography>
                    <p>{product.artist}</p>
                    <p>${product.price}</p>
                    <p>Total: ${product.price*product.orderLine.quantity}</p>
                </div>

            </div>
            <div className={Classes.quantityContainer}>
                <div>
                    <Button onClick={substract}>-</Button>
                    <Button >{product.orderLine.quantity}</Button>
                    <Button onClick={add}>+</Button>
                </div>  
                <div className={Classes.remove}>
                    <Typography className={Classes.link} onClick={remove}>remove</Typography>
                </div>


            </div>


        </div>
    )
}

export default CartCard;
