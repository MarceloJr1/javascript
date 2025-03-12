let paragrafo = document.querySelector("p");
let titulo = document.querySelector("h1");
let NumeroSecreto = gerarNumeroAleatório();

paragrafo.innerHTML = "Escolha um número entre 1 e 10";
titulo.innerHTML = "Jogo do Número Secreto";

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}



function gerarNumeroAleatório() {
    return parseInt(Math.random() * 10 + 1 );
}

function limparCampo(){
    chute = document.querySelector('input');
    chute = '';
}