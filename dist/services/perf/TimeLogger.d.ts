export declare class TimeLogger {
    monitoringStart: (name: any) => void;
    monitoringEnd: (name: any) => void;
    callbacks: ({
        refreshInterval: number;
        cb: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void;
    })[];
    loopData: Record<string, {
        last: number;
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
//# sourceMappingURL=TimeLogger.d.ts.map