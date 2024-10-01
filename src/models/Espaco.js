const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Espaco = sequelize.define('Espaco', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Espacos',
    timestamps: false // Ajuste se você usar timestamps
});

module.exports = Espaco;
