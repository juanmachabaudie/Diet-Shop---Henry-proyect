import React from 'react';
import Done from '../../assets/Done.gif';
import DoneImg from '../../assets/Done.jpg';
import './Payment.css';
import Cookie from 'universal-cookie';

const Payment = () => {
    const cookie = new Cookie();
    return (
        <div style={{maxHeight: "100vh", overflow: "hidden"}}>
            <div className="Receipt">
                <h1 style={{marginLeft: "auto", marginRight: "auto"}}>Recibo de compra</h1>
            </div>
            <div className="PaymentDiv">
                <img className="Done DoneGif" src={Done} />
                <img className="Done DoneImg"  src={DoneImg} />
            </div>
        </div>
    )
}

export default Payment
