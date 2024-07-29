const express = require('express');
const movieRoutes = require('./routes/movieRoutes');
const config = require('./config');

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());
// Usar las rutas definidas para el recurso de películas
app.use('/api/movies', movieRoutes);

// Iniciar el servidor y escuchar en el puerto configurado
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
