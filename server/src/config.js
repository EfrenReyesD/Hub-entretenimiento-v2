// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();


// Configuración de la base de datos y puerto del servidor
module.exports = {
    dbConfig: {
        server: process.env.DB_SERVER,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        options: {
            encrypt: false, // Usar true si la base de datos está en Azure
            enableArithAbort: true, //si existen errores finaliza la consulta
        }
    },
    port: process.env.PORT || 3000
};
