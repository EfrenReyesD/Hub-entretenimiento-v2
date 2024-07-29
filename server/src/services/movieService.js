// Importar la conexión a la base de datos desde el archivo db.js
const { poolPromise } = require('../models/db');

// Servicio para obtener todas las películas
const getMovies = async () => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('EXECUTE Get10Movies');
        return result.recordset; //devuelve los 10 registros de acuerdo del procedimiento almacenado
    } catch (err) {
        throw new Error(err.message); //Muestra el error en caso de existir
    }
};

// Servicio para obtener una película por su ID
const getMovieById = async (id) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('Id', sql.Int, id) //Pasar el ID como parámetro
            .query('SELECT * FROM Movies WHERE Id = @Id');
        return result.recordset[0]; // Devolver el primer (y único) registro encontrado
    } catch (err) {
        throw new Error(err.message);
    }
};


// Servicio para crear una nueva película
const createMovie = async (movie) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('Title', sql.NVarChar, movie.title)
            .input('ReleaseDate', sql.Date, movie.releaseDate)
            .query('INSERT INTO Movies (Title, ReleaseDate) VALUES (@Title, @ReleaseDate)');
        return result.rowsAffected[0]; // Devolver el número de filas afectadas
    } catch (err) {
        throw new Error(err.message);
    }
};

// Servicio para actualizar una película existente
const updateMovie = async (id, movie) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('Id', sql.Int, id)
            .input('Title', sql.NVarChar, movie.title)
            .input('Director', sql.NVarChar, movie.director)
            .input('ReleaseDate', sql.Date, movie.releaseDate)
            .query('UPDATE Movies SET Title = @Title, Director = @Director, ReleaseDate = @ReleaseDate WHERE Id = @Id');
        return result.rowsAffected[0];
    } catch (err) {
        throw new Error(err.message);
    }
};


// Servicio para eliminar una película por su ID
const deleteMovie = async (id) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM Movies WHERE Id = @Id');
        return result.rowsAffected[0];
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};
