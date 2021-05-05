import React from 'react';
import { connect } from 'react-redux';

export const Product = () => {
    return (
        <div>
            Hello from Product
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (name) => dispatch(addProduct(name))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);

