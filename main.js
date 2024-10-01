// Exemplo para editar feirante
document.getElementById('formEditFeirante').onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');
    const nome = formData.get('nome');
    const contato = formData.get('contato');

    fetch(`/feirante/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, contato })
    })
    .then(response => response.text())
    .then(data => alert(data));
};

// Exemplo para deletar feirante
document.getElementById('formDeleteFeirante').onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = formData.get('id');

    fetch(`/feirante/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(data => alert(data));
};
