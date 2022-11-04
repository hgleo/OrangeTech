const obj = 
{
    nome: 'Hugo Leonardo Melo',
    idade: 25,
    sexo: 'Masculino'
};

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.sexo);

const pessoa = 
{
    nome: 'Hgz',
    idade: 21,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        console.log('ok\n');
    }
};
console.log('ok\n');
console.log(pessoa['nome']);
console.log('ok\n');
console.log(pessoa['nome'],obj.idade);