import { contextBridge, ipcRenderer } from "electron";
import Veiculo from "./models/Veiculo";
import Usuario from "./models/Usuario";

contextBridge.exposeInMainWorld('dbAPI', {
    criaVeiculo: async(veiculo: Veiculo) => await ipcRenderer.invoke('create', veiculo),
    mostrarVeiculo: async() => await ipcRenderer.invoke('render'),
    procurarVeiculo: async(id: string) => await ipcRenderer.invoke('find', id),
    deletarVeiculo: async(id: string) => await ipcRenderer.invoke('delete', id),
    verDetalhes: (id : string) => ipcRenderer.send('show-about', id),
    voltarHomepage: () => ipcRenderer.send('return-home'),
    criaUsuario: async(usuario: Usuario) => await ipcRenderer.invoke('createUser', usuario),
    // procurarUsuarioId: (id: string) => ipcRenderer.send('procurar', id)
})