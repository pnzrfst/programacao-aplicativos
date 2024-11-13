import Usuario from "src/models/Usuario";
import { Client } from "pg";

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
    
    async salvarUsuarioNoBanco(usuario: Usuario){
        try{
            console.log('Email do usuário:', usuario.getEmail())
            this.conectarBanco.connect()
            const SQL = "INSERT INTO usuarios (id, nome_usuario, data_nascimento, email_usuario, senha_hash, criado_em, atualizado_em) VALUES ($1, $2, $3, $4, $5, $6, $7)";
            const values = [
                usuario.getId(),
                usuario.getNome(),
                usuario.getDataNascimento(),
                usuario.getEmail(),
                usuario.getSenha(),
                usuario.getCriadoEm(),
                usuario.getAtualizado()
            ];
            await this.conectarBanco.query(SQL, values);

        }catch(error){

            console.log(error);

        }finally{
            
            this.conectarBanco.end();
            this.conectarBanco = null
        }
    }

    async verificarCadastroExistente(email: string){
        try{
            console.log(email)
            this.conectarBanco.connect();
            const SQL = "SELECT * FROM usuarios WHERE email_usuario = $1"
            const cadastroEncontrado = await this.conectarBanco.query(SQL, [email]);
            return cadastroEncontrado.rows[0];

        }catch(error){
            console.log(error);
            return [];

        }finally{
            
            this.conectarBanco.end();
            this.conectarBanco = null;
        }
    }
}