import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getOrderById, getOrders } from '../../../redux/actions/';
import { useDispatch } from 'react-redux';


// import useStyles from './style';

function SearchOrder() {
    // const classes = useStyles();
    const [orderId, setOrderId] = useState();
    const dispatch = useDispatch();

    function onSubmit(e) {
        e.preventDefault();
        dispatch(getOrderById(orderId));
        setOrderId("");
    }

    return (
        <div style={{borderTop: "1px solid lightgray", marginTop: "15px", paddingTop: "20px"}}>
            <form action={`http://localhost:3001/cart/orders/${orderId}`} method="GET" onSubmit={e => onSubmit(e)}>
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                    <div style={{ display: "flex", alignItems: "flex-end"}}>
                        <Button type="submit" variant="contained" color="primary" style={{marginRight: "20px"}}>
                            Search
                     </Button>
                        <FormControl>
                            <InputLabel htmlFor="searchInput">Search order by ID</InputLabel>
                            <Input id="searchInput" type="number" endAdornment={<SearchIcon />} onChange={(e) => setOrderId(e.target.value)} value={orderId}> required</Input>
                        </FormControl>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchOrder
