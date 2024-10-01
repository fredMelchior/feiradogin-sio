CREATE DATABASE Feira;

USE Feira;

-- Tabela de Feirantes
CREATE TABLE Feirantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100)
);

-- Tabela de Recursos
CREATE TABLE Recursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,  -- Ex: "Cadeira", "Mesa"
    quantidade INT NOT NULL
);

-- Tabela de Espaços
CREATE TABLE Espacos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    capacidade INT NOT NULL
);

-- Tabela de Alocação de Recursos
CREATE TABLE Alocacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    feirante_id INT,
    recurso_id INT,
    espaco_id INT,
    data DATE,
    FOREIGN KEY (feirante_id) REFERENCES Feirantes(id),
    FOREIGN KEY (recurso_id) REFERENCES Recursos(id),
    FOREIGN KEY (espaco_id) REFERENCES Espacos(id)
);
