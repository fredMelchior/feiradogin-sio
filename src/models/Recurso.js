const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Recurso = sequelize.define('Recurso', {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Recursos',
    timestamps: false // Ajuste se você usar timestamps
});

module.exports = Recurso;
