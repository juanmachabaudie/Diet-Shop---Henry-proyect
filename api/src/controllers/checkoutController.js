const mercadopago = require("mercadopago");
const { Order_lines, Order, User } = require("../db");
// const sgMail = require('@sendgrid/mail');
const nodemailer = require('nodemailer');


//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
        for (item of itemsDb) {
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
    try {
        const { status } = req.body;
        let update;
        if (status === 'approved') {
            update = 'completed';
        } else {
            update = status;
        };
        const { email } = req.body;
        //  console.log(email)
        const user = await User.findOne({ where: { email } })
        //console.log(user.dataValues.uuid)
        const { uuid } = user.dataValues
        const userOrder = await Order.findAll({ where: { userUuid: uuid } })
        for (let order of userOrder) {
            // console.log(order.dataValues)
            if (order.dataValues.orderState === 'cart') {
                //  console.log(update)
                order.update({ orderState: update })
            }
        }
        const info = req.body.infoCheckOut
        console.log(info)

        const smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: 'healthyhenry99@gmail.com',
                pass: 'soyhenry123'
            }
        });

        const mailOptions = {
            from: 'healthy henry',
            to: `${email}`,
            html: 
            `
            <div> HEALTHY HENRY
            <h2 style='color:#ffd118'>Gracias por su compra</h2>
            <h3 style='color:#acff59'> Su pedido: </h3>
            <div> ${info.productsInCart.map((item) => {
                return(
                ` <div style='color:#acff59'}> <h3>${item.name} X ${item.quantity} unidades → Subtotal: $${item.price*item.quantity} </h3> </div>`
                )
            })} </div> 
            <div>
            `
        };

        smtpTransport.sendMail(mailOptions, (error, res) => {
            if (error) {
                res.send(error)
            }
            else {
                res.send('Success')
            }
        })

        smtpTransport.close();

    }
    catch (error) {
        next(error)
    }
}
module.exports = {
    checkout,
    changeOrderStatus,
};