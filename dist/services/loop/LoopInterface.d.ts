export interface LoopInterface {
    start(): void;
    removeLoop(loopName: string): any;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=LoopInterface.d.ts.map