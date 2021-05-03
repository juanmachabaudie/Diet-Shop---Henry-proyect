import React from 'react';
import OrderTable from './orderTable/OrderTable';
import SearchOrder from './searchOrder/SearchOrder';
import FilterOrders from './filterOrders/FilterOrders';
import style from './AdminOrders.module.css';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../redux/actions/index';
import { Button } from '@material-ui/core';

function AdminOrders() {
    const dispatch = useDispatch();

    function onClick() {
        dispatch(getOrders());
    }

    return (
        <div className={style.orderBkg}>
            <div className={style.sideBarContainer}>
                <div className={style.sideBar}>
                    <Button onClick={onClick} color="secondary" variant="contained" style={{ marginTop: "15px" }}>All orders</Button>
                    <FilterOrders />
                    <SearchOrder />
                </div>
            </div>
            <OrderTable />
        </div>
    )
}

export default AdminOrders
