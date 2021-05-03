import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import AccountDetails from '../accountDetails/AccountDetails';
import ResetPassword from "../resetPassword/ResetPassword";
import ResetUser from "../resetUser/ResetUser";
import ResetEmail from "../resetEmail/ResetEmail";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { URL_BACK_CART_USERS } from "../../auxiliar/constants/constants";
import OrderUser from "../orderUser/OrderUser";
import ResetName from "../resetName/ResetName";
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        height: '60vh',
        width: "100%",
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start"
    },
}));

const UserEdit = () => {
    const classes = useStyles();
    // const history = useHistory();
    const user = useSelector(state => state.user);
    const [select, setSelect] = useState("");
    const [orders, setOrders] = useState({
        pending: [],
        finish: []
    })

    useEffect(() => {
        let ord = [];
        // if (user.id === "GUEST") {
        //     history.push("/home")
        // } else {
        fetch(`${URL_BACK_CART_USERS}/${user.id}`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(json => {
                ord = json
            })
        setOrders({
            pending: ord.slice().filter(x => x.status === "Processing"),
            finish: ord.slice().filter(x => x.status === "Complete")
        })
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container className={classes.root}>
            <AccountDetails setSelect={setSelect} />
            {
                select === "password" ? <ResetPassword />
                    :
                    select === "user" ? <ResetUser />
                        :
                        select === "email" ? <ResetEmail />
                            :
                            select === "pendientes" ? <OrderUser name="pendientes" arr={orders.pending} />
                                :
                                select === "finalizados" ? <OrderUser name="finalizados" arr={orders.finish} />
                                    :
                                    select === "general" ? <ResetName /> : <></>
            }
        </Container>
    );
};

export default UserEdit;
