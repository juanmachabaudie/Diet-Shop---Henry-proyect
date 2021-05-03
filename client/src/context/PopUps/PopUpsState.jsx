import React, {useState} from 'react'
import PopUpsContext from './PopUpsContext'

const PopUpsState = (props) => {


    const [details, setDetails] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [cart, setCart] = useState(false);

    return (
        <PopUpsContext.Provider value={{
            details, login, register, cart,
            setDetails, setLogin, setRegister, setCart
            }}>
            {props.children}
        </PopUpsContext.Provider>
    )
}

export default PopUpsState
