import React from 'react';
import useStyles from './style';
import { Accordion, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getOrders} from '../../../redux/actions/index';




export default function Order({ userId, id, products, status, total }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    let estados = ["Cancel", "Complete", "Processing"];

    async function onChange(e) {
        await fetch(`http://localhost:3001/cart/orders/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: e.target.value
            })
        })
        dispatch(getOrders())
    }

    return (
        <div className={classes.root} style={{ marginBottom: "0.3rem" }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionHeader}
                >
                    <div style={{ display: "flex", minWidth: "100%", justifyContent: "space-between" }}>
                        <Typography className={classes.headerText} variant="subtitle1">Order: {id} </Typography>
                        <Typography className={classes.headerText} variant="subtitle1">Status: {status} </Typography>
                        <Typography className={classes.headerText} variant="subtitle1">User ID: {userId} </Typography>
                        <Typography className={classes.headerText} variant="subtitle1">Total: ${total}</Typography>

                    </div>
                </AccordionSummary>
                <TableContainer component={Paper} >
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product ID</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Subtotal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map(i => (
                                <TableRow key={i.id}>
                                    <TableCell>{i.id}</TableCell>
                                    <TableCell>{i.orderLine.quantity}</TableCell>
                                    <TableCell>${i.orderLine.subTotal}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell>
                                    <select name="" id="" onChange={onChange}>
                                        {estados.map(i => {
                                            return (
                                                <option value={i} selected={i === status ? "selected" : null}>{i}</option>
                                            )
                                        })}
                                    </select>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Accordion>
        </div>
    );
}




// function Order({ userId, id, total, products, status }) {
//     const [open, setOpen] = useState(false);
//     const [clase, setClase] = useState("orderLabel");

//     function onClick() {
//         if (open) {
//             setOpen(false);
//             setClase("active")
//         }
//         else setOpen(true);
//         setClase("orderLabel");
//     }

//     console.log(products)
//     return (
//         <div className="orderContent">
//             <div className={clase}>
//                 <button className="orderBtn" onClick={onClick}>+</button>
//                 <span>Order: {id}</span>
//                 <span>Status: {status}</span>
//                 <span>User ID: {userId}</span>
//                 <span>Total: {total}</span>
//             </div>
//             {open === true ? <div className="orderProducts">
//                 <ul>{products.map(i => {
//                     return (
//                         <li>
//                             <span>Product ID: {i.id}</span>
//                             <span>Quantity: {i.orderLine.quantity}</span>
//                             <span>Subtotal: {i.orderLine.subTotal}</span>
//                         </li>
//                     )
//                 })}</ul>
//             </div> :
//                 null}
//         </div>
//     )
// }

// export default Order
