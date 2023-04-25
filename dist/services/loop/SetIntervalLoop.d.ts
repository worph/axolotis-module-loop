import { TimeLogger, TimeLoggerInterface } from "../perf/TimeLogger";
import { LoopInterface } from "./LoopInterface";
export declare class SetIntervalLoop implements LoopInterface {
    private timeLogger;
    private intervalMs;
    loops: {
        loopName: string;
        iterationCallback: (delta: number) => void;
        timeLogger: TimeLoggerInterface;
    }[];
    constructor(timeLogger: TimeLogger, intervalMs: number);
    start(): void;
    removeLoop(loopName: string): void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=SetIntervalLoop.d.ts.map