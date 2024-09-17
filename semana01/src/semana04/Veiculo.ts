
export default class Veiculo{
    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano; 
        this.valor = 0;
        this.estaDisponivel = true;
    }
    
    protected marca: string

    protected getMarca() : string{
        return this.marca;
    }

    modelo: string
    protected getModelo() : string{
        return this.modelo;
    }

    ano: number
    protected getAno() : number{
        return this.ano;
    }
   
    
    private valor: number
    
    public getValor() : number{
        return this.valor    
    }

    public setValor(valor: number): void{
        this.valor = valor
    }

    public estaDisponivel: boolean;

    public getDisponibilidade() : boolean{
        return this.estaDisponivel    
    }

    public setDisponibilidade(estaDisponivel: boolean): void{
        this.estaDisponivel = estaDisponivel
    }

    protected histTransf: number[] = [];

    verDetalhes() : void{
        console.log(`
            Marca: ${this.marca},
            Modelo: ${this.modelo},
            Ano: ${this.ano},
            Valor: ${this.valor},
            Disponivel: ${this.estaDisponivel}
            Historico de transferencias: ${this.histTransf}
            `)
    }

    historicoTransferencia(vezesTransferido: number, dataTransferencia: string) : void{
        this.histTransf.push(vezesTransferido);
        var arrayTransferencias = []
        arrayTransferencias.push(dataTransferencia)
        console.log(dataTransferencia)
    }

}