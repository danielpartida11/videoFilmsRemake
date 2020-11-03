module.exports.getMovie = async(req, res) =>{

    const movies = await Movie.find();
    res.json(movies);

};


module.exports.createMovie = async(req, res) =>{

    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);

};

module.exports.updateMovie = async (req, res) => {
    
    const movie = await Movie.findById(req.body.id);
    movie.title = req.body.title;
    await movie.save();
    res.json(movie);

};

module.exports.deleteMovie = async (req, res) => {

    const {id} = req.params;
    const movie = await Movie.findById(id);
    await Movie.deleteOne(movie);
    res.json('Pelicula Borrada');

};
