// Importar el enrutador de Express y el controlador de películas
const express = require('express');
const movieController = require('../controllers/movieController');

// Crear un nuevo enrutador
const router = express.Router();

// Definir las rutas y asociarlas con los controladores
router.get('/', movieController.getMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);


// Exportar el enrutador para usarlo en la aplicación principal
module.exports = router;
