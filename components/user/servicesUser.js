module.exports.getUser = async(req, res) =>{

    const users = await User.find();
    res.json(users);

};


module.exports.createUser = async(req, res) =>{

    const user = new User(req.body);
    await user.save();
    res.json(user);

};

module.exports.updateUser = async (req, res) => {
    
    const movie = await User.findById(req.body.id);
    movie.title = req.body.title;
    await movie.save();
    res.json(movie);

};

module.exports.deleteUser = async (req, res) => {

    const {id} = req.params;
    const movie = await User.findById(id);
    await Movie.deleteOne(user);
    res.json('Usuario Borrado...');

};