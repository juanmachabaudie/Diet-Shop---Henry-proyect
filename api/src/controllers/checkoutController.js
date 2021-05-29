const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: 'TEST-2288095869695461-052300-65245ae07d16df90839a471f10fddc6c-172264424',
});

async function checkout(req, res, next) {
    try {
        console.log(req.body)
        // const { productsInCart } = req.body;
        // const items = productsInCart.map(({ price, name, quantity }) => ({
        //     title: name,
        //     unit_price: price,
        //     quantity
        // }));
        // const preference = {
        //     items,
        //     back_urls: {
        //         success: 'http://localhost:3000/',
        //         failure: 'http://localhost:3000/',
        //         pending: 'http://localhost:3000/',
        //     },
        //     auto_return: 'approved',
        // }

        // const meli = await mercadopago.preferences.create(preference)
        // res.send(meli.body)

    } catch (error) {
        next(error);
    }
}

module.exports = {
    checkout,
};