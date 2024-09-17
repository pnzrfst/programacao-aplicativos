
export default class Comprador{
    nome: string
    idade: number
    cidadeOrigem: string

    constructor(nome: string, idade: number, cidadeOrigem: string){
        this.nome = nome
        this.idade = idade
        this.cidadeOrigem = cidadeOrigem
    }
}