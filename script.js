function gerarTabuada() {
    let numero = document.getElementById('numero').value;
    let vezes = document.getElementById('vezes').value;
    let resultado = document.getElementById('resultado');

    if (numero === '' || vezes === '') {
        alert('Preencha ambos os campos!');
        return;
    }

    numero = parseInt(numero);
    vezes = parseInt(vezes);
    resultado.innerHTML = '';

    for (let i = 1; i <= vezes; i++) {
        let item = document.createElement('li');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(item);
    }
}
