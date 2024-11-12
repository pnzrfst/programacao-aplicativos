import { v4 as uuid} from 'uuid'

export default class Usuario{
    private id: string;
    private nome_usuario: string;
    private data_nascimento: Date;
    private email_usuario: string;
    private senha: string;
    private criado_em: Date;
    private atualizado_em: Date

    constructor(nome_usuario: string, data_nascimento: Date, email_usuario: string, senha: string){
        this.id = uuid()
        this.nome_usuario = nome_usuario;
        this.data_nascimento = data_nascimento;
        this.email_usuario = email_usuario;
        this.senha = senha;
        this.criado_em = new Date();
        this.atualizado_em = new Date();
    }

    public getId(){
        return this.id;
    }

    public getNome(){
        return this.nome_usuario;
    }
    
    public getDataNascimento(){
        return this.data_nascimento;
    }
    
    public getEmail(){
        return this.email_usuario;
    }

    public getSenha(){
        return this.senha;
    }

    public getCriadoEm(){
        return this.criado_em;
    }

    public getAtualizado(){
        return this.atualizado_em;
    }

}