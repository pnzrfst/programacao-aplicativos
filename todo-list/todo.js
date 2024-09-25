const tarefas = [];

const adicionarTarefas = ()=>{
    const inputWrite_bar = document.getElementById('escrevaTarefa');
    const $tarefaCriada = document.getElementById('escrevaTarefa').value.trim();

    if($tarefaCriada === null || $tarefaCriada === ""){
        window.alert("Você digitou uma tarefa vazia, favor, revise as informações.");
        return
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 1000),
        texto: $tarefaCriada,
        completed: false
    }

    tarefas.push(novaTarefa)
    mostrarTarefas()

    inputWrite_bar.value = "";

    inputWrite_bar.focus()

    console.log(tarefas);

}


const mostrarTarefas = ()=>{
    const $listaDeTarefas = document.getElementById('mostrarTarefa');
    $listaDeTarefas.innerHTML = ""
    
    for(let i = 0; i < tarefas.length; i++){
        const lista = document.createElement("li");

        if(tarefas[i].completed === true){
            lista.classList.add("completed");
        }

        const textoTarefa = document.createElement("span");
        textoTarefa.id = 'textoTarefa'
        textoTarefa.textContent = tarefas[i].texto;


        const divbtns = document.createElement("div");
        divbtns.id = "div-btns"
        
        const editarTarefa = document.createElement('button');
        editarTarefa.className = 'material-symbols-outlined';
        editarTarefa.id = 'editarTarefa';
        editarTarefa.setAttribute('completed', 'false');
        editarTarefa.textContent = 'edit';
        editarTarefa.addEventListener('click', () =>{  
            const tarefaAlteradaTexto = window.prompt("Digite o novo texto:");
            const tarefaAntiga = tarefas.indexOf(tarefas[i]);
            tarefas.splice(tarefaAntiga,1);

            const tarefaAlterada = {
                id: Math.floor(Math.random() * 1000),
                texto: tarefaAlteradaTexto,
                completed: false
            }

            tarefas.push(tarefaAlterada);
            mostrarTarefas();
            return
        })

       
        const excluirTarefa = document.createElement('button');
        excluirTarefa.className = 'material-symbols-outlined';
        excluirTarefa.id = 'deletarTarefa';
        excluirTarefa.setAttribute('completed', 'false');
        excluirTarefa.textContent = 'delete';
        excluirTarefa.addEventListener('click', () =>{
            const tarefaExcluir = tarefas.indexOf(tarefas[i]);
            tarefas.splice(tarefaExcluir,1)
            $listaDeTarefas.removeChild(lista)
            return
        })
        
   
        const marcarTarefaConcluida = document.createElement('button');
        marcarTarefaConcluida.className = 'material-symbols-outlined';
        marcarTarefaConcluida.id = 'marcarConcluida';
        marcarTarefaConcluida.setAttribute('completed', 'false');
        marcarTarefaConcluida.textContent = ' check_box';
        marcarTarefaConcluida.addEventListener('click', () =>{
            if(lista.classList.completed == true){
                lista.classList = ""
            }else{
                lista.classList = "completed"
            }
        })
       

        divbtns.appendChild(editarTarefa);
        divbtns.appendChild(excluirTarefa);
        divbtns.appendChild(marcarTarefaConcluida);



        lista.appendChild(textoTarefa);
        lista.appendChild(divbtns);



        $listaDeTarefas.appendChild(lista);
        
    }
    
}
