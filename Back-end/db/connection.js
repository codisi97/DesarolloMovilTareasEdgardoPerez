const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'examen_SegundoParcialMovil1',
    'root',
    'R00tP4ssw0rd',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);

sequelize.authenticate()
    .then(() => console.log('Conexión exitosa'))
    .catch((error) => console.log('Error de conexión:', error));

module.exports = sequelize;