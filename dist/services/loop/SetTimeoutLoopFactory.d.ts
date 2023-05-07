import { TimeLogger, TimeLoggerInterface } from "../perf/TimeLogger";
import { FrameLoopManager } from "./FrameLoopManager";
import { LoopCallback, LoopInterface, LoopRemoverInterface } from "./LoopInterface";
export declare class SetTimeoutLoop implements LoopInterface {
    private callback;
    private timeLogger;
    private timeoutMs;
    enable: boolean;
    constructor(callback: LoopCallback, timeLogger: TimeLoggerInterface, timeoutMs: number);
    start(): void;
    stop(): void;
}
export declare class SetTimeoutLoopFactory {
    private timeLogger;
    private frameLoop;
    constructor(timeLogger: TimeLogger, frameLoop: FrameLoopManager);
    create(name: string, callback: LoopCallback, timeoutMs?: number): LoopRemoverInterface;
}
//# sourceMappingURL=SetTimeoutLoopFactory.d.ts.map