import { contextBridge, ipcRenderer } from "electron";
import Veiculo from "./models/Veiculo";

contextBridge.exposeInMainWorld('dbAPI', {
    criaVeiculo: async(veiculo: Veiculo) => await ipcRenderer.invoke('create', veiculo),
    mostrarVeiculo: async() => await ipcRenderer.invoke('render'),
    procurarVeiculo: async(id: string) => await ipcRenderer.invoke('find', id),
    deletarVeiculo: async(id: string) => await ipcRenderer.invoke('delete', id),
    criaUsuario: async(usuario: any) => await ipcRenderer.invoke('createUser', usuario),
    verificarCadastroExistente: async(email: string) =>  await ipcRenderer.invoke('procurar', email)
})

contextBridge.exposeInMainWorld('navigationApi', {
    verDetalhes: (id : string) => ipcRenderer.send('show-about', id),
    voltarHomepage: () => ipcRenderer.send('return-home'),
})


contextBridge.exposeInMainWorld('authAPI', {
    hashSenhaUser: async (senha: any) => ipcRenderer.invoke("senhaHasheada", senha)
})