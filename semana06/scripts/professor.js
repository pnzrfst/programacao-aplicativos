
const usuarios_mensagens = []
const $nomeUser = document.getElementById('Fname');
const $mensagemUser = document.getElementById('mensagemForm');
const $professor = document.getElementById('professorForm');

function pegarInformacoesUser(event){
    event.preventDefault()
    if($nomeUser.value && $mensagemUser.value && $professor.value){
        const usuario = {
            nome: $nomeUser.value,
            mensagem: $mensagemUser.value,
            professor: $professor.value
        };
        

        usuarios_mensagens.push(usuario);
        criarComentario();
        console.log(usuarios_mensagens);
        return

    }
    
    $nomeUser.style.border = '1px solid red';
    $mensagemUser.style.border = '1px solid red';
    $professor.style.border = '1px solid red';

    console.log('preencha as informações.')
}   

function capturaEnter(event){
    if(event.key == 'Enter'){
        pegarInformacoesUser(event)
        return
    }
}


function criarComentario(){
    const $comentario = `
    <div class="comment-template">
        <div class="infosUser">
            <p>nome: ${$nomeUser.value} </p>
            <span></span>
            <p>professor: ${$professor.value} </p>
            </div>
        <p>${$mensagemUser.value}</p>
    </div>`

    
    const $novoComentario = document.createElement('div');
    $novoComentario.innerHTML = $comentario; 

   
    const $containerComentario = document.querySelector('.comment-template');

    $containerComentario.appendChild($novoComentario);
}

