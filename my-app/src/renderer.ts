
import { l } from 'vite/dist/node/types.d-aGj9QkWt';
import './index.css';
import Tarefa from './Tarefa';
import Swal from 'sweetalert2'
var tarefasCadastradas: Tarefa[] = [];

function adicionarPeloEnter(event: KeyboardEvent){
    if(event.key === 'Enter'){
        adicionarTarefa();
        console.log(tarefasCadastradas)
    }
} 

function adicionarTarefa(){
    const input = document.getElementById("writeBar") as HTMLInputElement;
    const textoTarefa = input.value.trim();

    if(textoTarefa === ""){
        console.log('ERRO: digite uma tarefa válida.');
        return
    }

    const novaTarefa = new Tarefa(textoTarefa);
    tarefasCadastradas.push(novaTarefa);

    localStorage.setItem("db_tarefas", JSON.stringify(tarefasCadastradas));
    console.log(textoTarefa);
    mostrarTarefas()
    input.value = "";
    input.focus()
}

function mostrarTarefas(){
    const listaDeTarefas = document.getElementById("tarefas") as HTMLElement;
    listaDeTarefas.innerHTML = ""
    for(var i = 0; i < tarefasCadastradas.length; i++){
        const li = document.createElement('li');

        if(tarefasCadastradas[i].getStatus() === true){
            li.classList.add('completed');
        }

        const tarefa = document.createElement('span');
        tarefa.textContent = tarefasCadastradas[i].getText();
        
        const edit = document.createElement('button');
        edit.textContent = 'Editar';
        edit.id = 'editarTarefa';
        edit.setAttribute('onclick', `alterarTarefa(${tarefasCadastradas[i].getIdTarefa()})`);

        const deletar = document.createElement('button');
        deletar.textContent = 'Apagar tarefa';
        deletar.id = 'apagarTarefa';
        deletar.setAttribute('onclick', `deletarTarefa(${tarefasCadastradas[i].getIdTarefa()})`);

        const marcarConcluida = document.createElement('button');
        marcarConcluida.id = 'atualizarTarefa'
        marcarConcluida.textContent = tarefasCadastradas[i].getStatus() ? 'Desmarcar' : 'Marcar Concluida';
        marcarConcluida.classList.add("completed");
        marcarConcluida.setAttribute('onclick', `alteraStatus(${tarefasCadastradas[i].getIdTarefa()})`);


        const container = document.createElement('div');

        container.appendChild(marcarConcluida);
        container.appendChild(edit);
        container.appendChild(deletar);

        li.appendChild(tarefa);
        li.appendChild(container);

        listaDeTarefas.appendChild(li);

    }
}


function alteraStatus(id: number): void{
    console.log('entrou')
    const index = tarefasCadastradas.findIndex(tarefa => tarefa.getIdTarefa() === id);
    const valorAtual = tarefasCadastradas[index].getStatus();
    tarefasCadastradas[index].setStatusTarefa(!valorAtual);
    localStorage.setItem("db_tarefas", JSON.stringify(tarefasCadastradas));
    mostrarTarefas()

}

function deletarTarefa(id: number){
    tarefasCadastradas = tarefasCadastradas.filter(tarefa => tarefa.getIdTarefa() !== id);
    Swal.fire({
        title: "Tem certeza que deseja deletar essa tarefa?",
        text: "Você não poderá desfazer essa ação!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, apagar tarefa!",
        cancelButtonText: "Não, cancelar ação."
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Apagada!",
            text: "Sua tarefa foi apagada.",
            icon: "success",

          });
          localStorage.setItem("db_tarefas", JSON.stringify(tarefasCadastradas));
          mostrarTarefas()
        }
      });

    
}

async function alterarTarefa(id: number){
    const index = tarefasCadastradas.findIndex(tarefa => tarefa.getIdTarefa() === id);
    const { value } = await Swal.fire({
        title: "Editar tarefa: ",
        input: "text",
        inputLabel: "digite a nova tarefa: ",
        inputValue: tarefasCadastradas[index].getText(),
        showCancelButton: true, 
    });
    
    if(value !== undefined && value !== ''){
        tarefasCadastradas[index].setTextoTarefa(value);
        localStorage.setItem("db_tarefas", JSON.stringify(tarefasCadastradas));
        mostrarTarefas();
        return
    }
}
    

window.alteraStatus = alteraStatus;
window.alterarTarefa = alterarTarefa;
window.deletarTarefa = deletarTarefa;
window.adicionarPeloEnter = adicionarPeloEnter;
window.adicionarTarefa = adicionarTarefa;