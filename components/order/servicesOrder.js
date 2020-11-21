//-----------------------------------------GET------------------------------------------------------------------
module.exports.getOrder = async(req, res) =>{

    const orders = await Order.find();
    res.json(orders);

};
//----------------------------------------------------GET--------------------------------------------------------

//---------------------------------------------POST--------------------------------------------------------------
module.exports.createOrder = async(req, res) =>{

    const order = new Order(req.order);
    await order.save();
    res.json(order);

};
//------------------------------------------------------POST-----------------------------------------------------

//------------------------------------------------PATH-----------------------------------------------------------
module.exports.updateOrder = async (req, res) => {
    
    const order = await Order.findById(req.body.id);
    order.title = req.body.title;
    await order.save();
    res.json(order);

};
//-------------------------------------------------PATH----------------------------------------------------------

//-------------------------------------------DELETE--------------------------------------------------------------
module.exports.deleteOrder = async (req, res) => {

    const {id} = req.params;
    const order = await Order.findById(id);
    await Movie.deleteOne(order);
    res.json('Pedido Borrado');

};
//------------------------------------------------DELETE---------------------------------------------------------