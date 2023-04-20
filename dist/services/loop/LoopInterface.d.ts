export interface LoopInterface {
    getType(): string;
    start(): void;
    enablePerfLog(activated: boolean): any;
    onPerfLog(minimumRefreshInterval: number, callback: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void): () => void;
    removeLoop(loopName: string): any;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=LoopInterface.d.ts.map