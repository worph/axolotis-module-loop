export interface LoopInterface {
    start(): void;

    removeLoop(loopName: string);

    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
