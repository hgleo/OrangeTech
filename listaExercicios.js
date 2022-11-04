/*
1)Crie uma classe para representar carros .
Os carros possuem marca, cor e gasto médio de combustível por Km rodado.
Crie um método que dado a qtde de Km e preço de combustível nos dê o valor gasto em R$ p/ realizar o percurso.
*/


class Carro{
    marca;
    cor;
    gastoMed;

constructor(marca,cor,gastoMed){
    this.marca= marca;
    this.gastoMed = gastoMed;
    
}
calculaGasto(dist,precoCombust){
    let valor = ((dist*precoCombust)/this.gastoMed).toFixed(2);
    return console.log('O valor estipulado pro',this.marca,'é:',valor);
}

}

const Polo = new Carro('Polo','Prata',13);
const Tcross = new Carro('Tcross','Prata',12);
Polo.calculaGasto(499,4.30);
Tcross.calculaGasto(499,4.30);