import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../../redux/actions/index';
import Order from '../order/Order';
import style from './OrderTable.module.css';

function OrderTable() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])


    if (!orders || !orders[0]) {
        if (!orders) {
            return (
                <div className={style.loading}></div>
            )
        } else {
            return (
                <div className={style.notFound}>
                    No se han encontrado resultados
                </div>
            )
        }
    }

    return (
        <div className={style.ordersWrapper} style={{ margin: "20px" }}>
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
