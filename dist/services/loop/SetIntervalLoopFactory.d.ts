import { TimeLogger, TimeLoggerInterface } from "../perf/TimeLogger";
import { FrameLoopManager } from "./FrameLoopManager";
import { LoopCallback, LoopInterface, LoopRemoverInterface } from "./LoopInterface";
export declare class SetIntervalLoop implements LoopInterface {
    private callback;
    private timeLogger;
    private intervalMs;
    private intervalId;
    constructor(callback: LoopCallback, timeLogger: TimeLoggerInterface, intervalMs: number);
    start(): void;
    stop(): void;
}
export declare class SetIntervalLoopFactory {
    private timeLogger;
    private frameLoop;
    constructor(timeLogger: TimeLogger, frameLoop: FrameLoopManager);
    create(name: string, callback: LoopCallback, intervalMs?: number): LoopRemoverInterface;
}
//# sourceMappingURL=SetIntervalLoopFactory.d.ts.map