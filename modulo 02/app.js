let paragrafo = document.querySelector("p");
let titulo = document.querySelector("h1");
let NumeroSecreto = gerarNumeroAleatório();

paragrafo.innerHTML = "Escolha um número entre 1 e 10";
titulo.innerHTML = "Jogo do Número Secreto";

function verificarChute() { 
    let chute = document.querySelector("input").value;
    console.log(chute == NumeroSecreto);
}



function gerarNumeroAleatório() {
    return parseInt(Math.random() * 10 + 1 );
}