import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('datos', 'root', 'Jupagu20.', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize