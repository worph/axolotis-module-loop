import { TimeLogger } from "../perf/TimeLogger";
import { LoopInterface } from "./LoopInterface";
export declare class SetIntervalLoop implements LoopInterface {
    private timeLogger;
    private intervalMs;
    loops: {
        [id: string]: {
            loopName: string;
            iterationCallback: (delta: number) => void;
        };
    };
    private prevTime;
    constructor(timeLogger: TimeLogger, intervalMs: number);
    start(): void;
    removeLoop(loopName: string): void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=SetIntervalLoop.d.ts.map