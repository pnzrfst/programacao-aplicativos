import Usuario from "../../models/Usuario";
import "./style.css"


document.getElementById('cadastrar').addEventListener('click', (event: MouseEvent) =>{
    event.preventDefault();

    const name_user = document.getElementById('name_user') as HTMLInputElement;
    const data_nascimento = document.getElementById('data_nascimento') as HTMLInputElement;
    const email_user = document.getElementById('email_user') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const password_auth = document.getElementById('password-auth') as HTMLInputElement;

    if(password.value !== password_auth.value){
        return
    }

    const user = new Usuario(name_user.value, new Date(data_nascimento.value), email_user.value, password.value);
    (window as any).dbAPI.criaUsuario(user)
})