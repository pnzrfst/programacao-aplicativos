import ContaBancaria from "../semana02/ContaBancaria";
import TitularConta from "../semana02/TitularConta";

export default class ContaCorrente extends ContaBancaria{
    private limite: number; 
    
    constructor(titular: TitularConta, chavePix: string){
        super(titular, chavePix);
        this.limite = 100;
    }

    public getLimite(): number{
        return this.limite;
    }
    
    
    public override sacar(valor: number): void {
        var valorDisponivel = this.getSaldo() + this.limite;
        
        if(valorDisponivel <= 0 || valor > valorDisponivel){
            console.log(`Não foi possível realizar o saque. Favor verificar as informações.`);
            return
        }

        if(valor > this.getSaldo()){
            var aux = valor - this.getSaldo();
            this.limite = this.limite - aux;
            this.setSaldo(0);
            return
        }
        
        var saldo = this.getSaldo()
        this.setSaldo(saldo - valor);
        console.log(`Novo saldo: ${saldo}`)
    }

    public override exibirCliente(){
        console.log(`
        Saldo: ${this.getSaldo()}
        Chave pix: ${this.getChavePix()}
        Numero da conta: ${this.getNumeroConta()}
        Data de criação: ${this.getData_Criacao()}
        Novo limite: ${this.getLimite()}
        `)
    }

}