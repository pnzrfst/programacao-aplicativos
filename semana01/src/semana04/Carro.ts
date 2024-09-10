import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
    protected numeroPortas : number;
    protected classificacao : string;

    constructor(marca: string, modelo: string, ano: number, numeroPortas: number, classificacao: string){
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
        this.classificacao = classificacao;
    }
    
    public override verDetalhes(): void {
        console.log(`
            Marca: ${this.marca},
            Modelo: ${this.modelo},
            Nº de portas: ${this.numeroPortas}
            Classificacao: ${this.classificacao}
            Ano: ${this.ano},
            Disponivel: ${this.estaDisponivel}
            Historico de transferencias: ${this.histTransf}
            `)
    }
    
}