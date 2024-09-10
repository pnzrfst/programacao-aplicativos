import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
    private numeroPortas : number;
    constructor(marca: string, modelo: string, ano: number){
        super(marca, modelo, ano);
        this.numeroPortas = 4;
    }

    
    
}