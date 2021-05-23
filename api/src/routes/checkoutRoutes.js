const router = require('express').Router();
const mercadopago = require('mercadopago');

mercadopago.configure({
    access_token: 'TEST-2288095869695461-052300-65245ae07d16df90839a471f10fddc6c-172264424',
});

router.post('/', (req, res, next) => {
    const { productsInCart } = req.body;
    const items = productsInCart.map(({ price, name, quantity }) => ({
        title: name,
        unit_price: price,
        quantity
    }));

    const preference = {
        items,
        back_urls: {
            success: 'http://localhost:3000/',
            failure: 'http://localhost:3000/',
            pending: 'http://localhost:3000/',
        },
        auto_return: 'approved',
    };

    mercadopago.preferences.create(preference)
        .then(response => res.send(response.body))
        .catch(err => next(err));
});

module.exports = router;

// collection_id=1237022864
// &collection_status=approved
// &payment_id=1237022864
// &status=approved
// &external_reference=null
// &payment_type=credit_card
// &merchant_order_id=2710792291
// &preference_id=172264424-10e46f56-8497-4aaf-b757-2e24ff55a5ac
// &site_id=MLA
// &processing_mode=aggregator
// &merchant_account_id=null

// export const changeOrderStatus = userId => (dispatch, getState) => {
//     const url = window.location.href.slice(window.location.href.indexOf('?'));
//     const status = url.slice(url.indexOf('&status') + 1).split('=')[1].split('&')[0];
//     if (status === 'approved' || status === 'pending') {
//         const products = JSON.parse(localStorage.getItem('cart'));
//         axios.post('http://localhost:3000/users/send-order', {order: products, userId})
//         .then(res => {
//             dispatch({
//                 type: SEND_ORDER_EMAIL,
//                 order: res.data
//             });
//         })
//         .catch(err => console.log("ERROR ENVIANDO MAIL: ", err));

//         const promises = products.map(product => {
//             return axios.put(`http://localhost:3000/products/${product.id}`, {form: {...product, stock: product.stock - product.order_line.quantity}})
//             .then(res => console.log(res))
//             .catch(err => console.log(err));
//         });

//         Promise.all(promises)
//         .then(res => {
//             return axios.put(`http://localhost:3000/checkout/${userId}`, {status})
//             .then(response => {
//                 dispatch({
//                     type: CHANGE_ORDER_STATUS,
//                     order: response.data
//                 });
//                 window.location.search = window.location.search.split('?')[0];
//                 localStorage.removeItem('cart');
//             })
//         })
//         .catch(err => console.log('SE PUDRIÓ TODO'));
//     } else {
//         return axios.put(`http://localhost:3000/checkout/${userId}`, {status})
//         .then(res => {
//         dispatch({
//             type: CHANGE_ORDER_STATUS,
//             order: res.data
//         });
//         window.location.search = window.location.search.split('?')[0];
//         localStorage.removeItem('cart');
//         })
//         .catch(err => console.log(err));
//     };
// };