class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

const Hugo = new Pessoa();
Hugo.nome = 'Hugo Leo';
Hugo.idade = 21;
console.log(Hugo);
Hugo.descrever();

const Gabriela = new Pessoa();
Gabriela.nome = 'Gabriela Quadra';
Gabriela.idade = 21;
Gabriela.descrever();

const Leonardo = new Pessoa();
Leonardo.nome = 'Leonardo Melo';
Leonardo.idade = 46;
Leonardo.descrever();

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais véio que ${p2.nome}\n`);
    }
    else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais véio que ${p1.nome}\n`);
    }
    else{
        console.log(`${p2.nome} e ${p1.nome} possuem a mesma idade.\n`);
    }
}

compararPessoas(Hugo,Leonardo);
compararPessoas(Hugo,Gabriela);
compararPessoas(Gabriela,Leonardo);