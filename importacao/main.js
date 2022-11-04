/*const funcoes = require('./funcaoAux.js')*/
const {gets, print } = require('./funcaoAux.js');

const qtdeNumeros = gets();
const numerosSorteados = [];
let maiorValor=0;

for(let i = 0; i<5;i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);


/*
for (let i = 0; i<5;i++){
    const numeroSorteado = gets();
    numeroSorteado.push(numeroSorteado);
}

let maiorValor =0;

for(let i =0; i<numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}
*/