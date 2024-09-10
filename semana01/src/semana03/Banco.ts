import ContaBancaria from "../semana02/ContaBancaria"
import leia from 'readline-sync'
import TitularConta from "../semana02/TitularConta";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";



export default class Banco{
    public contasGeradas: ContaBancaria[] = [];

    private enviarConta(conta: ContaBancaria){
        this.contasGeradas.push(conta);
        console.log(`Conta cadastrada no banco de dados com sucesso. 
        Numero: ${conta.getNumeroConta()}`)
    }

    public adicionarContas(){
        var nome = leia.question("digite seu nome completo: ")
        var cpf = leia.question("digite seu cpf: ");
        var dataNascimento = leia.question("digite sua data de nascimento: ");
        var chavePix = leia.question("cadastre uma nova chave pix: ");
        var tipoDeConta = leia.keyInSelect(["Conta Corrente", "Conta Poupanca"]);

        var titular = new TitularConta(nome, dataNascimento, cpf);
        
        var conta : ContaBancaria;
        
        if(tipoDeConta === 0){
            conta = new ContaCorrente(titular, chavePix);
        }else{
            conta = new ContaPoupanca(titular, chavePix);
        }

        this.enviarConta(conta);
    }


    
    public deletarContas(){
        for(var i = 0; i < this.contasGeradas.length; i++){
            var numeroConta = leia.question("digite o numero da conta: ")
            if(numeroConta === this.contasGeradas[i].getNumeroConta()){
                this.contasGeradas.splice(i, 1);
                console.log("conta deletada com sucesso.");
                return;
            }
        }
    }

    public mostrarConta(){
        console.log("------------TODAS AS CONTAS-------------");
        console.table(this.contasGeradas);
    }

    public transferenciaContas(){
        var contaDeOrigem = leia.question("Digite o numero da conta de origem da transferencia: ");
        var indexDeOrigem;
        for(let i = 0; i < this.contasGeradas.length; i++){
            if(contaDeOrigem == this.contasGeradas[i].getNumeroConta()){
                indexDeOrigem = i
            }
        }

        if(indexDeOrigem == undefined){
            console.log("A conta não foi encontrada.")
            return
        }

        var contaDeDestino = leia.question("Digite o numero da conta de destino da transferência: ");
        var indexDeDestino = this.contasGeradas.findIndex(contasgeradas => contasgeradas.getNumeroConta() == contaDeDestino);
        
        if(indexDeDestino == -1){
            console.log("A conta não foi encontrada.");
            return
        }

        var valorTransferencia = leia.questionFloat("Agora, digite o valor que você deseja transferir: ");
        
        if(this.contasGeradas[indexDeOrigem].getSaldo() >= valorTransferencia){
            this.contasGeradas[indexDeOrigem].sacar(valorTransferencia);
            this.contasGeradas[indexDeDestino].depositar(valorTransferencia);
            
            return
        }
    }



} 