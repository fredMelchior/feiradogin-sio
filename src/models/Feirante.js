const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Feirante = sequelize.define('Feirante', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contato: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Feirantes',
    timestamps: false // Ajuste se você usar timestamps
});

module.exports = Feirante;
