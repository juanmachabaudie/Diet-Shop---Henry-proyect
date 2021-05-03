import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../redux/actions/index';
import Order from '../order/Order';
import style from './OrderTable.module.css';

function OrderTable() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getOrders());
        console.log(orders)
    }, [dispatch])
    
    
    if(!orders){
        return(
            <span>Loading...</span>
        )
    }
    console.log(orders)
    return (
        <div className={style.ordersWrapper} style={{margin: "20px"}}>
            {orders.map(i => {
                    return (
                        <Order userId={i.userId} id={i.id} total={i.total} products={i.products} status={i.status} />
                    )
                })
            }
        </div>
    )
}

export default OrderTable
