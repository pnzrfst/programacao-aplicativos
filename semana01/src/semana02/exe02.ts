 import leia from 'readline-sync'

// import { somarValores } from './repository/utils'
// import { Pessoa } from './repository/utils';

// somarValores(10, 20);



// var nome = leia.question('digite seu nome: ');
// var cpf = leia.questionInt('digite seu cpf: ');
// var idade = leia.questionInt('digite sua idade: ');
// var dataNascimento = leia.questionInt('digite sua data de nascimento(dd-mm-yy): ');
// var telefones = leia.question('digite seu telefone: ');
// var emails = leia.question('digite seu email: ');
// var nomeMae = leia.question('digite o nome da sua mae: ')

// const pessoa : Pessoa = {
//     nome: nome,
//     cpf: cpf,
//     idade: idade,
//     dataNascimento: dataNascimento,
//     contatos: {
//         telefones: [telefones],
//         emails: [emails]
//     },
//     nomeMae: nomeMae
// }

// console.log(pessoa);



type Categoria = {
    ehPerecivel: boolean,
    peso: number,
    familia: string,
    validade: string,
}


type Produto = {
    nome: string,
    codSKU: string,
    categoria: Categoria,
    preco: number,
}


function cadastrarProduto(parametros: Produto){
    parametros.nome = leia.question('digite o nome do produto: ');
    parametros.codSKU = leia.question('digite o codigo do produto: ');
    parametros.categoria.ehPerecivel = false;
    parametros.categoria.familia = leia.question('digite a familia do produto: ');
    parametros.categoria.peso = leia.questionInt('digite o peso do produto: ');
    parametros.categoria.validade = leia.question('digite a validade do produto: ');
    parametros.preco = leia.questionInt('digite o preco do produto: ')
}
