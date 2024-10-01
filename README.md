# Sistema de Cadastro de Feirantes

Este é um sistema simples para cadastrar feirantes, recursos (cadeiras, mesas) e espaços da feira, permitindo a organização e alocação dos recursos de forma prática e intuitiva.

## Funcionalidades

- Cadastro de Feirantes
- Cadastro de Recursos (cadeiras, mesas, etc.)
- Cadastro de Espaços da Feira
- Alocação de Recursos a Feirantes em espaços específicos

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js com Express
- **Banco de Dados**: MySQL

## Estrutura do Banco de Dados

O banco de dados contém as seguintes tabelas:

- **Feirantes**: Armazena os dados dos feirantes.
- **Recursos**: Armazena os diferentes tipos de recursos disponíveis.
- **Espacos**: Armazena os espaços disponíveis na feira.
- **Alocacoes**: Registra a alocação de recursos aos feirantes em determinados espaços.

## Como Executar o Projeto

### Pré-requisitos

1. **Node.js**: Instale o Node.js em seu sistema.
2. **MySQL**: Instale o MySQL e crie um banco de dados chamado `Feira`.

### Passos

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seuusuario/seurepositorio.git
   cd seurepositorio
