export interface LoopInterface {
    start(): void;
    stop(): void;
}
export type LoopCallback = (delta: number) => void;
export interface LoopRemoverInterface {
    loop: LoopInterface;
    remover: () => void;
}
//# sourceMappingURL=LoopInterface.d.ts.map