
// Importar el servicio de películas para manejar la lógica de negocio
const movieService = require('../services/movieService');

const getMovies = async (req, res) => {
    try {
        const movies = await movieService.getMovies();
        res.json(movies);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


// Controlador para obtener una película por su ID
const getMovieById = async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.json(movie);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Controlador para crear una nueva película
const createMovie = async (req, res) => {
    try {
        const rowsAffected = await movieService.createMovie(req.body);
        res.status(201).send(`Movie created with ${rowsAffected} rows affected`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Controlador para actualizar una película por su ID
const updateMovie = async (req, res) => {
    try {
        const rowsAffected = await movieService.updateMovie(req.params.id, req.body);
        if (rowsAffected === 0) {
            return res.status(404).send('Movie not found');
        }
        res.send(`Movie updated with ${rowsAffected} rows affected`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Controlador para eliminar una película por su ID
const deleteMovie = async (req, res) => {
    try {
        const rowsAffected = await movieService.deleteMovie(req.params.id);
        if (rowsAffected === 0) {
            return res.status(404).send('Movie not found');
        }
        res.send(`Movie deleted with ${rowsAffected} rows affected`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};
