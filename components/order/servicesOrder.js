module.exports.getOrder = async(req, res) =>{

    const orders = await Order.find();
    res.json(orders);

};


module.exports.createOrder = async(req, res) =>{

    const order = new Order(req.order);
    await order.save();
    res.json(order);

};

module.exports.updateOrder = async (req, res) => {
    
    const order = await Order.findById(req.body.id);
    order.title = req.body.title;
    await order.save();
    res.json(order);

};

module.exports.deleteOrder = async (req, res) => {

    const {id} = req.params;
    const order = await Order.findById(id);
    await Movie.deleteOne(order);
    res.json('Pedido Borrado');

};
