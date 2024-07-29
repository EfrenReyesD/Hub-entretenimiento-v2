// Importar el módulo 'mssql' para conectarse a SQL Server
const sql = require('mssql');
const config = require('../config');


// Crear una conexión a la base de datos usando las configuraciones
const poolPromise = new sql.ConnectionPool(config.dbConfig)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server');
        return pool;
    })
    .catch(err => {
        console.error('Database Connection Failed: ', err);
        process.exit(1); //Terminar si hay falla de conexion
    });


    // Exportar la conexión para usarla en otros módulos
module.exports = {
    sql, poolPromise
};
