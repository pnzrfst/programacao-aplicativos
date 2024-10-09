export {};

declare global{
    interface Window{
        adicionarPeloEnter: (event: KeyboardEvent) => void;
        adicionarTarefa: () => void;
        alteraStatus: (id: number) => void;
        deletarTarefa: (id: number) => void;
        alterarTarefa: (id: number) => void;
    }
}