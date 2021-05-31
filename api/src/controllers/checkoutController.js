const mercadopago = require("mercadopago");
const { Order_lines, Product, Order, User } = require("../db");

mercadopago.configure({
    access_token: 'TEST-2288095869695461-052300-65245ae07d16df90839a471f10fddc6c-172264424',
});

async function checkout(req, res, next) {  
    try {
       // llena las tablas de las ordenes
        const info = req.body.infoCheckOut;
        const user = await User.findOne({ where: { email: info.userEmail } })
        const newOrder = await Order.create({
            orderState: "cart",
            shippingState: "initial",
            userUuid: user.uuid,
        });
        const itemsDb = info.productsInCart.map(({ price, uuid, quantity }) => ({
            productUuid: uuid,
            price: price,
            quantity,
            orderUuid: newOrder.uuid
        }));
        for (item of itemsDb){
            const newOrderLine = await Order_lines.create(item)
        }

// request a meli
        const items = info.productsInCart.map(({ price, name, quantity }) => ({
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
            additional_info: 'HOLA',
            auto_return: 'approved',
        }

        const meli = await mercadopago.preferences.create(preference)
        res.send(meli.body)

    } catch (error) {
        next(error);
    }
}

async function changeOrderStatus(req, res, next) { 
  try{
    //console.log(req.body)
    const { status } = req.body;
    let update;
    if (status === 'approved'){
        update = 'completed';
    } else {
    update = status;
    };
    const { email } = req.body;
  //  console.log(email)
    const user = await User.findOne({ where: { email } })
    //console.log(user.dataValues.uuid)
    const { uuid } = user.dataValues
    const userOrder = await Order.findAll({ where: { userUuid: uuid }})
   for (let order of userOrder){
      // console.log(order.dataValues)
     if (order.dataValues.orderState === 'cart'){
       //  console.log(update)
         order.update({orderState: update})
     }
   }
}
catch (error){
    next(error)
}
}


module.exports = {
    checkout,
    changeOrderStatus,
};