export default class TitularConta{
    constructor(nome: string, dataNascimento: string, cpf: string){
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento; 
    }
    nome: string;
    cpf: string
    dataNascimento: string;
} 