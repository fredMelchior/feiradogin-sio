const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'Feira'
});

connection.connect();

// Endpoint para cadastrar feirante
app.post('/cadastrarFeirante', (req, res) => {
    const { nome, contato } = req.body;
    const query = 'INSERT INTO Feirantes (nome, contato) VALUES (?, ?)';
    connection.query(query, [nome, contato], (error) => {
        if (error) throw error;
        res.send('Feirante cadastrado com sucesso!');
    });
});

// Consultar todos os feirantes
app.get('/feirantes', (req, res) => {
    const query = 'SELECT * FROM Feirantes';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Consultar todos os recursos
app.get('/recursos', (req, res) => {
    const query = 'SELECT * FROM Recursos';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Consultar todos os espaços
app.get('/espacos', (req, res) => {
    const query = 'SELECT * FROM Espacos';
    connection.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Editar um feirante
app.put('/feirante/:id', (req, res) => {
    const { id } = req.params;
    const { nome, contato } = req.body;
    const query = 'UPDATE Feirantes SET nome = ?, contato = ? WHERE id = ?';
    connection.query(query, [nome, contato, id], (error) => {
        if (error) throw error;
        res.send('Feirante atualizado com sucesso!');
    });
});

// Editar um recurso
app.put('/recurso/:id', (req, res) => {
    const { id } = req.params;
    const { tipo, quantidade } = req.body;
    const query = 'UPDATE Recursos SET tipo = ?, quantidade = ? WHERE id = ?';
    connection.query(query, [tipo, quantidade, id], (error) => {
        if (error) throw error;
        res.send('Recurso atualizado com sucesso!');
    });
});

// Editar um espaço
app.put('/espaco/:id', (req, res) => {
    const { id } = req.params;
    const { nome, capacidade } = req.body;
    const query = 'UPDATE Espacos SET nome = ?, capacidade = ? WHERE id = ?';
    connection.query(query, [nome, capacidade, id], (error) => {
        if (error) throw error;
        res.send('Espaço atualizado com sucesso!');
    });
});

// Deletar um feirante
app.delete('/feirante/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Feirantes WHERE id = ?';
    connection.query(query, [id], (error) => {
        if (error) throw error;
        res.send('Feirante deletado com sucesso!');
    });
});

// Deletar um recurso
app.delete('/recurso/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Recursos WHERE id = ?';
    connection.query(query, [id], (error) => {
        if (error) throw error;
        res.send('Recurso deletado com sucesso!');
    });
});

// Deletar um espaço
app.delete('/espaco/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Espacos WHERE id = ?';
    connection.query(query, [id], (error) => {
        if (error) throw error;
        res.send('Espaço deletado com sucesso!');
    });
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
