// import React, { useState } from 'react';
// import './Order.css';



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Order({ userId, id, products, status, total }) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{marginBottom: "0.3rem"}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: "lightgray"}}
                >
                    <Typography className={classes.heading}>Order: {id} Status: {status}   Total: {total}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {products.map(i => {
                            return (
                                <li>
                                    <span>Product ID: {i.id}</span>
                                    <span>Quantity: {i.orderLine.quantity}</span>
                                    <span>Subtotal: {i.orderLine.subTotal}</span>
                                </li>
                            )
                        })}
                    </Typography>
                </AccordionDetails>
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
