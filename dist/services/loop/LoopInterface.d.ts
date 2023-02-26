export interface PerfLogKPI {
    totalTimeMs: number;
    meanTimeMs: number;
    sampleNumber: number;
}
export interface LoopInterface {
    getType(): string;
    start(): void;
    enablePerfLog(activated: boolean): any;
    getPerfLog(): {
        [id: string]: PerfLogKPI;
    };
    removeLoop(loopName: string): any;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=LoopInterface.d.ts.map