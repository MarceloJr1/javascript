alert("bem vindo ao jogo do numero secreto!");
let numerosecreto = parseInt(Math.random() * 10 + 1);
let chute;
let tentativas = 1;
//enquanto 

while (chute != numerosecreto) {
    chute = prompt("escolha um número de 1 a 30");

    if(numerosecreto == chute) {
    break;

    } else {
        if(numerosecreto > chute){
            alert(`O numero secreto é maior que ${chute}`);
            
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++
    }
 }

 let tentativa = tentativas > 1 ? `tentativas` : `tentativa`;

if(tentativas > 1) {
    alert(`Isso aí! você é muito esperto. ${chute}, você precisou de um total de ${tentativas} tentativas`);
} else{
    alert(`Isso aí! você é muito esperto. ${chute}, você precisou de um total de ${tentativas} ${tentativa}`);
}
    

//O uso de ${} é possível graças às template literals, que permitem a interpolação de strings e a inclusão de expressões em strings.