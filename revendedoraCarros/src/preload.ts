import { contextBridge, ipcRenderer } from "electron";
import Veiculo from "./models/Veiculo";

contextBridge.exposeInMainWorld('dbAPI', {
    criaVeiculo: async(veiculo: Veiculo) => await ipcRenderer.invoke('create', veiculo),
    mostrarVeiculo: async() => await ipcRenderer.invoke('render'),
    procurarVeiculo: async(id: string) => await ipcRenderer.invoke('find', id),
    deletarVeiculo: async(id: string) => await ipcRenderer.invoke('delete', id)
})