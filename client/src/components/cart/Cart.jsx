import React, {useContext, useEffect, useState} from 'react';
import UseStyles from './styles';
import PopUpsContext from '../../context/PopUps/PopUpsContext';
import ProductsContext from "../../context/Products/ProductsContext";
import {Dialog, DialogContent, IconButton, Slide, Button} from '@material-ui/core';
import {Close} from '@material-ui/icons';
import CartCard from './cartCard/CartCard';
import {getCart} from '../../auxiliar/functions/cartFunctions';
import { useSelector } from "react-redux";
import { getCartGuest } from "../../auxiliar/functions/CartWest";
import { generatePaymentLink } from '../../auxiliar/functions/otherFunctions';

const TransitionComponent = props => <Slide direction="left" {...props}/>;

 
const Cart = ({}) => {
    const user = useSelector((state) => state.user);
    const id = user.id;
    const classes = UseStyles ();
    const {cart, setCart, setLogin} = useContext (PopUpsContext);
    const {setCartCount} = useContext (ProductsContext);
    const [items, setItems] = useState([]); 
    const [update, setUpdate] = useState(false);
    const [total, setTotal] = useState(0);
    
    const a = async () => {
        let guestCart = localStorage.getItem("cart");
        let count = 0;
        if(id !== "GUEST"){
            const userCart = await getCart(id);
            if(userCart) {
                var { products, total } = userCart;
                products.map((product => {
                    count += Number(product.orderLine.quantity);
                }))
            }
        }else if (guestCart){
            var {products, total} = getCartGuest();
            products.map((product => {
                count += Number(product.orderLine.quantity);
            }))
        }        
        setCartCount(count);
        setItems(products);
        setTotal(total);
    }
    
    useEffect(() => {
        a()
    }, [cart, update, id])
    
    

    return (
        <>
            <Dialog TransitionComponent={TransitionComponent} 
            PaperProps={{className: classes.PaperProps}} 
             className={classes.DialogContainer} 
             BackdropProps={{onClick: () => setCart(false)}}
             open={cart}>
                <DialogContent className={classes.DialogContent}>
                        <div className={classes.cartHeader}>
                            <span className={classes.headerTitle}>
                                CARRITO
                                
                            </span>
                            <IconButton className={classes.headerXButton} onClick={() => setCart(false)}>
                                <Close/>
                            </IconButton>
                        </div>
                        <hr className={classes.hr}/>
                        <div className={classes.cartBody}>
                            { items !== undefined && items.length ? items.sort((a, b) => a.id>b.id? 1: -1).map((product) => <CartCard key={product.id} update={update} setUpdate={setUpdate} product={product}/>):                                
                            <h3>Aún no hay nada en tu carrito</h3>}
                        </div>
                        <div className={classes.cartFooter}>
                            <div className={classes.footerPrice}>
                                <label>
                                    SUBTOTAL: 
                                    <span className={classes.price}>$ {total} </span>
                                </label> 
                            </div>
                            <div className={classes.footerButtonDiv}>
                            { id !== "GUEST" ? 
                                <Button 
                                    disabled={items ? !items.length : false} 
                                    onClick={async () => window.location.href = await generatePaymentLink(user, items)} 
                                    className={classes.proceedButton}>CONTINUAR A CHECKOUT
                                </Button> :
                                <Button 
                                onClick={() => setLogin(true)} 
                                className={classes.proceedButton}>REGISTRATE
                                </Button>
                            }
                            </div>
                        </div>

                </DialogContent>
            </Dialog>
        </>
    );
}
export default Cart; 
