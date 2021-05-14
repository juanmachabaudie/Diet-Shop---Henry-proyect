import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';



const SubTotal = ({ total, products }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cartReducer.productsInCart);
    const [ total, setTotal ] = useState();
    // const user = localStorage.getItem('userId');

    const handleGoToCheckout = () => dispatch(goToCheckout(products));

    useEffect(() => {
        setTotal(products.reduce((acc, product) => acc + product.price * product.quantity));
    }, [ products ]);

    return (
        <Container>
            <Typography>Total: {total}</Typography>
            {
                user
                    ? <Button onClick={handleGoToCheckout}>Comprar</Button>
                    : <Button>Iniciar Sesion</Button>
            }
        </Container>
    );
};

export default SubTotal;
