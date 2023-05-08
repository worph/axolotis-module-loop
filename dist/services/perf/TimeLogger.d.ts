export interface TimeLoggerInterface {
    monitoringStart: () => void;
    monitoringEnd: () => void;
}
export declare const SUFFIX_DELIMITER = "-";
export declare class TimeLogger {
    getTimeLogger(name: string): TimeLoggerInterface;
    callbacks: ({
        refreshInterval: number;
        cb: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void;
    })[];
    onPerfLog(minimumRefreshInterval: number, callback: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void): () => void;
    enablePerfLog(activated: boolean): void;
}
//# sourceMappingURL=TimeLogger.d.ts.map