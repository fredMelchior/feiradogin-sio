const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const Feirante = require('./models/Feirante');
const Recurso = require('./models/Recurso');
const Espaco = require('./models/Espaco');
const path = require('path');

db.authenticate().then(async () => {
    console.log("DB connected");
    // Sincroniza os modelos com o banco de dados
    await db.sync();
}).catch(err => {
    console.log("Falha na conexão do DB", err);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint para cadastrar feirante
app.post('/cadastrarFeirante', async (req, res) => {
    const { nome, contato } = req.body;
    try {
        await Feirante.create({ nome, contato });
        res.send('Feirante cadastrado com sucesso!');
        console.log('Feirante cadastrado com sucesso!')
    } catch (error) {
        console.error('Erro ao cadastrar feirante:', error);
        res.status(500).send('Erro ao cadastrar feirante');
    }
});

// Consultar todos os feirantes
app.get('/feirantes', async (req, res) => {
    try {
        const feirantes = await Feirante.findAll();
        console.log(feirantes)
        res.json(feirantes);
    } catch (error) {
        console.error('Erro ao consultar feirantes:', error);
        res.status(500).send('Erro ao consultar feirantes');
    }
});

// Endpoint para cadastrar recurso
app.post('/cadastrarRecurso', async (req, res) => {
    const { tipo, quantidade } = req.body;
    try {
        await Recurso.create({ tipo, quantidade });
        res.send('Recurso cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar recurso:', error);
        res.status(500).send('Erro ao cadastrar recurso');
    }
});

// Consultar todos os recursos
app.get('/recursos', async (req, res) => {
    try {
        const recursos = await Recurso.findAll();
        res.json(recursos);
    } catch (error) {
        console.error('Erro ao consultar recursos:', error);
        res.status(500).send('Erro ao consultar recursos');
    }
});

// Endpoint para cadastrar espaço
app.post('/cadastrarEspaco', async (req, res) => {
    const { nome, capacidade } = req.body;
    try {
        await Espaco.create({ nome, capacidade });
        res.send('Espaço cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar espaço:', error);
        res.status(500).send('Erro ao cadastrar espaço');
    }
});

// Consultar todos os espaços
app.get('/espacos', async (req, res) => {
    try {
        const espacos = await Espaco.findAll();
        res.json(espacos);
    } catch (error) {
        console.error('Erro ao consultar espaços:', error);
        res.status(500).send('Erro ao consultar espaços');
    }
});

// Editar um feirante
app.put('/feirante/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, contato } = req.body;
    try {
        await Feirante.update({ nome, contato }, { where: { id } });
        res.send('Feirante atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar feirante:', error);
        res.status(500).send('Erro ao atualizar feirante');
    }
});

// Editar um recurso
app.put('/recurso/:id', async (req, res) => {
    const { id } = req.params;
    const { tipo, quantidade } = req.body;
    try {
        await Recurso.update({ tipo, quantidade }, { where: { id } });
        res.send('Recurso atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar recurso:', error);
        res.status(500).send('Erro ao atualizar recurso');
    }
});

// Editar um espaço
app.put('/espaco/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, capacidade } = req.body;
    try {
        await Espaco.update({ nome, capacidade }, { where: { id } });
        res.send('Espaço atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao atualizar espaço:', error);
        res.status(500).send('Erro ao atualizar espaço');
    }
});

// Deletar um feirante
app.delete('/feirante/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Feirante.destroy({ where: { id } });
        res.send('Feirante deletado com sucesso!');
    } catch (error) {
        console.error('Erro ao deletar feirante:', error);
        res.status(500).send('Erro ao deletar feirante');
    }
});

// Deletar um recurso
app.delete('/recurso/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Recurso.destroy({ where: { id } });
        res.send('Recurso deletado com sucesso!');
    } catch (error) {
        console.error('Erro ao deletar recurso:', error);
        res.status(500).send('Erro ao deletar recurso');
    }
});

// Deletar um espaço
app.delete('/espaco/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Espaco.destroy({ where: { id } });
        res.send('Espaço deletado com sucesso!');
    } catch (error) {
        console.error('Erro ao deletar espaço:', error);
        res.status(500).send('Erro ao deletar espaço');
    }
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
