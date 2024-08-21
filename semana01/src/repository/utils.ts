import leia from 'readline-sync'


export function somarValores (num1:number, num2:number){
    var total : number;

    total = num1 + num2;
    
    console.log(total)
}


export type Pessoa = {
    nome: string,
    idade: number, 
    cpf: number,
    dataNascimento: number,
    contatos: {
        telefones: string[],
        emails: string[]
    },
    nomeMae : string
}


export function cadastrarPessoa(parametres: Pessoa){
}