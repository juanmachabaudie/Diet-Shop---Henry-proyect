import React, { useEffect, useContext} from 'react';
import {NavBar, Products, ProductDetails, FormRegister, Login, AdminOrders, Cart} from './components';
import {Route, useLocation, useHistory} from 'react-router-dom';
import {Dashboard, Payment} from './pages';
import {useDispatch} from 'react-redux';
import {setProducts} from './redux/actions';
import InitialPage from './pages/initialPage/InitialPage';
import Cookies from 'universal-cookie';
import FunctionsContext from './context/contextFunctions/functionsContext';
import { getUser } from './auxiliar/functions/userFunctions';
import UserEdit from './components/userEdit/UserEdit'

const App = ({location}) => {
    // const location = useLocation();
    const history = useHistory();
    const {onLogIn} = useContext(FunctionsContext);
    const dispatch = useDispatch();

    const logIn = async()=> {
        const cookies = new Cookies();
        const userId = cookies.get("userId");
        userId && await onLogIn(await getUser(userId));
    }

    useEffect(() => {
        if (location.pathname==="/"){ history.push("/home")}
        dispatch(setProducts())
    }, [location.pathname, dispatch, history])

    useEffect(() => {
        logIn();
    }, [])

    return (
        <>
            {location.pathname!=="/home" && <NavBar/>}
            <Route path='/products'><Products /></Route>
            <Route exact path='/home' component={InitialPage}></Route>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path='/admin/orders' component={AdminOrders}/>
            <Route exact path='/account' component={UserEdit} />
            <Route path='/payment' component={Payment}/>
            <Login/>
            <FormRegister/>
            <ProductDetails />
            <Cart/>
        </>
    )
}


export default App;
