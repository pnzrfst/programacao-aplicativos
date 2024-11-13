import "./style.css"


document.getElementById('cadastrar').addEventListener('click', async (event: MouseEvent) =>{
    event.preventDefault();

    const name_user = document.getElementById('name_user') as HTMLInputElement;
    const data_nascimento = document.getElementById('data_nascimento') as HTMLInputElement;
    const emailcadastro = document.getElementById('emailCadastro') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const password_auth = document.getElementById('password-auth') as HTMLInputElement;

    console.log(name_user.value, data_nascimento.value, emailcadastro.value, password.value, password_auth.value);
    
    if(password.value !== password_auth.value){
        return
    }

    const usuarioExistente = await (window as any).dbAPI.verificarCadastroExistente(emailcadastro.value);
    if(usuarioExistente?.id){
        console.log("Usuário já cadastrado.");
    }

    const user = {
        nome_usuario: name_user.value, 
        data_nascimento: new Date(data_nascimento.value), 
        email_usuario: emailcadastro.value, 
        senha: password.value
    };

    await (window as any).dbAPI.criaUsuario(user);

})



document.getElementById('login').addEventListener('click', async (event: MouseEvent) =>{
    const email = document.getElementById('email-user') as HTMLInputElement;
    const senha = document.getElementById('password-user') as HTMLInputElement
    console.log(email.value)
    console.log(senha.value)

    const user = await (window as any).dbAPI.verificarCadastroExistente(email.value);
    console.log(user)
    if(!user){
        console.log('Não existe um cadastro com esse email.')
        return;
    }

    const senhaValida = {
        senha_digitada: senha.value,
        senhaHasheada: user.senha_hash
    }

    const sValida = (window as any).authAPI.hashSenhaUser(senhaValida)
    
    if(!sValida){
        console.log("Senha incorreta.")
        return
    }
    await(window as any).navigationApi.voltarHomepage()
})