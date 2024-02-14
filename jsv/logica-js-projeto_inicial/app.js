alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log('numeroSecreto');
let chute;
let tentativas = 1;
// enquanto o chute não for igual.ns
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
   { if (chute == numeroSecreto) {
        alert('Isso ai! Você descobriu o número secreto (5)');
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
    } else {  
        alert(`O numero secreto é maior que ${chute}`);
    }
    }}
    //tentativas = tentativas + 1;
    tentativas++
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// se chute for igual ao número secreto
