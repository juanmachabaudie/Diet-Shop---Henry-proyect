const { User, Product, Order } = require("../db");

async function getOrders(_req, res, _next) {
    const orders = await Order.findAll({
        include: [
            {
                model: Product
            },
            {
                model: User,
                attributes: ["uuid", "email", "userName"]
            }
        ]
    })
    res.json(orders);
};

async function getUserOrders(req, res, _next) {
    const {uuid} = await req.params;
    const orders = Order.findAll({
        where: {
            userId: uuid,
        },
        include: [
            {
                model: Product
            },
            {
                model: User,
                attributes: ["uuid", "email", "userName"]
            }
        ]
    })
    res.json(orders);
}

async function getOrder(req, res, _next) {
    const {uuid} = await req.params;
    const order = Order.findOne({
        where: {
            uuid,
        },
        include: [
            {
                model: Product
            },
            {
                model: User,
                attributes: ["uuid", "email", "userName"]
            }
        ]
    })
    res.json(order);
}

// ↓↓ idealmente solo tendriamos que modificar la prop de estado usando el update ↓↓
async function updateOrder(req, res, _next) {
    const {uuid} = await req.params;
    const order = Order.findOne({
        where: {
            uuid,
        },
        include: [
            {
                model: Product
            },
            {
                model: User,
                attributes: ["uuid", "email", "userName"]
            }
        ]
    })
    order.update(req.body)
    res.json(order);
}

module.exports = {
    getOrders,
    getUserOrders,
    getOrder,
    updateOrder
}

