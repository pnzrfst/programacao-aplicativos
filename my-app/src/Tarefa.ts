
export default class Tarefa {
    constructor(text: string){
        this.id = Math.floor(Math.random() * 1000000),
        this.text = text,
        this.completed = false;
    }

    private id: number;
    private text: string;
    private completed: boolean;


    public getIdTarefa(){
        return this.id
    }

    public getText(){
        return this.text
    }

    public getStatus(){
        return this.completed
    }

    public setTextoTarefa(text: string){
        this.text = text;
    }

    public setStatusTarefa(completed: boolean){
        this.completed = completed
    }
}

