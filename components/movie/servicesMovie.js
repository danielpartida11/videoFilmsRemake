module.exports.getMovie = async(req, res) =>{
    const movies = await Movie.find();
    res.json(movies);
};


module.exports.createMovie = async(req, res) =>{
    const {title } = req.body;
    const pelicula = {title};
    const movie = new Movie(pelicula);
    await movie.save();
    res.json(movie);
};

router.put('/peliculas/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    let peliculaList = peliculas.filter(pelicula => pelicula.id != id);
    let pelicula = {id, title};
    peliculaList.push(pelicula);
    peliculas = peliculaList;
    res.json(pelicula);
});

router.put('/peliculas', async(req, res) => {
    const {title} = req.body;
    movie.title = title;
    const movie = await Movie.findOne({});
    await movie.save();
})

router.delete('/peliculas/:id', (req, res) => {
    const {id} = req.params;
    let peliculaList = peliculas.filter(pelicula => pelicula.id != id);
    peliculas = peliculasList;
    res.json('Pelicula Borrada');
});
