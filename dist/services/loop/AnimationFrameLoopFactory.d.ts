import { TimeLogger, TimeLoggerInterface } from "../perf/TimeLogger";
import { FrameLoopManager } from "./FrameLoopManager";
import { LoopCallback, LoopInterface, LoopRemoverInterface } from "./LoopInterface";
export declare class AnimationFrameLoop implements LoopInterface {
    private callback;
    private timeLogger;
    enable: boolean;
    constructor(callback: LoopCallback, timeLogger: TimeLoggerInterface);
    start(): void;
    stop(): void;
}
export declare class AnimationFrameLoopFactory {
    private timeLogger;
    private frameLoop;
    constructor(timeLogger: TimeLogger, frameLoop: FrameLoopManager);
    create(name: string, callback: LoopCallback): LoopRemoverInterface;
}
//# sourceMappingURL=AnimationFrameLoopFactory.d.ts.map