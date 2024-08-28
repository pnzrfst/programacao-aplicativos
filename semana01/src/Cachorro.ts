import Dono from "./Dono";

export default class Cachorro{
    constructor(nome: string, raca: string, cor: string, tamanho: string, dono: Dono){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho;
        this.dono = dono;
    }

    nome: string;
    raca: string;
    cor: string;
    tamanho: string;
    dono: Dono;

    exibirCachorro(){
        console.log(`o cachorro ${this.nome}, é da raça ${this.raca}, da cor ${this.cor}, do tamanho
        ${this.tamanho}, e do dono ${this.dono}`)
    }

    exibirDono(){
        console.log(`o dono ${this.dono} é tutor do cachorro ${this.nome}.`)
    }
}

