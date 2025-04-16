// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

const nomes = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value.trim();
    if (nome) {
        nomes.push(nome);
        document.getElementById("amigo").value = "";
        document.getElementById("listaAmigos").innerHTML += `<li>${nome}</li>`;
    } else {
        alert("Insira um nome válido.");
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.textContent = nomes.length ? `O amigo secreto é: 
    ${nomes[Math.floor(Math.random() * nomes.length)]}` : "Lista vazia.";
}

