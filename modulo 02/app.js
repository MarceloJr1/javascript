
// variaveis
let paragrafo = document.querySelector("p");
let titulo = document.querySelector("h1");
let NumeroSecreto = gerarNumeroAleatório;
let chance = 1;

// corpo do código
paragrafo.innerHTML = "Escolha um número entre 1 e 10";
titulo.innerHTML = "Jogo do Número Secreto";

    //Funcções
function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function gerarNumeroAleatório() {
    return parseInt(Math.random() * 10 + 1 );
}

function limparCampo(){
    chute = document.querySelector("input");
    chute = "";
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == NumeroSecreto) {
        exibirNaTela("h1", "Acertou!");
        let palavraTentativa = chance > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = "Você descobriu o número secreto com ${chance} ${palavraTentativa}!";
        exibirNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (chute > NumeroSecreto) {
            exibirNaTela("p", "O número secreto é menor");
        } else{
            exibirNaTela("p", "O número secreto é menor");
        }
    }
}



