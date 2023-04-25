import { TimeLogger, TimeLoggerInterface } from "../perf/TimeLogger";
import { LoopInterface } from "./LoopInterface";
export declare class AnimationFrameLoop implements LoopInterface {
    private timeLogger;
    private type;
    getType(): string;
    constructor(timeLogger: TimeLogger, type?: string);
    loops: {
        loopName: string;
        iterationCallback: (delta: number) => void;
        timeLogger: TimeLoggerInterface;
    }[];
    start(): void;
    removeLoop(loopName: string): void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void;
}
//# sourceMappingURL=AnimationFrameLoop.d.ts.map