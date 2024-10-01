async function cadastrarFeirante(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
        const response = await fetch('/cadastrarFeirante', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error('Erro ao cadastrar feirante:', error);
    }
}

async function cadastrarRecurso(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
        const response = await fetch('/cadastrarRecurso', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error('Erro ao cadastrar recurso:', error);
    }
}

async function cadastrarEspaco(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
        const response = await fetch('/cadastrarEspaco', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error('Erro ao cadastrar espaço:', error);
    }
}

async function editarFeirante(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
        const response = await fetch(`/feirante/${json.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        });
        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error('Erro ao editar feirante:', error);
    }
}

async function deletarFeirante(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const json = Object.fromEntries(data.entries());

    try {
        const response = await fetch(`/feirante/${json.id}`, {
            method: 'DELETE'
        });
        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error('Erro ao deletar feirante:', error);
    }
}
