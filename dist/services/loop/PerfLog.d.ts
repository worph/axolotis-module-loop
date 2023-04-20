export declare class PerfLog {
    protected monitoringStart: (name: any) => void;
    protected monitoringEnd: (name: any) => void;
    callbacks: ({
        refreshInterval: number;
        last: number;
        cb: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void;
    })[];
    loopData: Record<string, {
        start: number;
        minTimeMs: number;
        maxTimeMs: number;
        totalTimeMs: number;
        sampleNumber: number;
        meanTimeMs: number;
    }>;
    onPerfLog(minimumRefreshInterval: number, callback: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void): () => void;
    enablePerfLog(activated: boolean): void;
}
//# sourceMappingURL=PerfLog.d.ts.map