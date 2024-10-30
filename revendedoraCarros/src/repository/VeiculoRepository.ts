import { Client } from "pg";
import Veiculo from "src/models/Veiculo";


export default class VeiculoRepository{
    private conectarBanco: Client;

    constructor(){
        if(!this.conectarBanco){
            this.conectarBanco = new Client({
                host: 'localhost',
                port: 5432,
                database: 'revendedoraVeiculos',
                user: 'postgres',
                password: 'senai'
            })
        }
    }
    
    async salvarVeiculoNoBanco(veiculo: Veiculo){
        try{
            this.conectarBanco.connect()
            const SQL = "INSERT INTO veiculos (id, modelo_veiculo, cor_veiculo, ano, preco_veiculo, foto_veiculo) VALUES ($1, $2, $3, $4, $5, $6)";
            const values = [
                veiculo.getId(), 
                veiculo.getModelo(), 
                veiculo.getCor(), 
                veiculo.getAno(), 
                veiculo.getPreco(), 
                veiculo.getImagem()
            ];
            await this.conectarBanco.query(SQL, values);

        }catch(error){

            console.log(error);

        }finally{
            
            this.conectarBanco.end();
            this.conectarBanco = null
        }
    }


    async mostrarVeiculos(){
        try{
            this.conectarBanco.connect()
            
            const SQL = "SELECT * FROM veiculos"
            const veiculosCadastrados = await this.conectarBanco.query(SQL);
            if(veiculosCadastrados.rows.length > 0){
                return veiculosCadastrados.rows
            }else{
                console.log('Não foi possivel achar os veiculos.');
                return []
            }
            
        }catch(error){

            console.log(error)
            return [];

        }finally{

            this.conectarBanco.end();
            this.conectarBanco = null
        }
    }

    async procurarVeiculo(id: string){
        try{

            this.conectarBanco.connect();
            const SQL = "SELECT * FROM veiculos WHERE id = $1"
            const veiculoEncontrado = await this.conectarBanco.query(SQL, [id]);
            return veiculoEncontrado.rows;

        }catch(error){
            console.log(error);
            return [];

        }finally{
            
            this.conectarBanco.end();
            this.conectarBanco = null;
        }
    }

}