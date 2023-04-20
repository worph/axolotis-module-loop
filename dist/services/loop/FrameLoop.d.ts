import { LoopInterface } from "./LoopInterface";
export declare const ANIMATION_FRAME_LOOP = "ANIMATION_FRAME_LOOP";
export declare const INTERVAL_SET_1S = "INTERVAL_SET_1S";
export declare class FrameLoop {
    constructor();
    loopType: {
        [id: string]: LoopInterface;
    };
    start(): void;
    enablePerfLog(activated: boolean): void;
    onPerfLog(minimumRefreshInterval: number, callback: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void): () => void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void, loopType?: string): () => void;
}
//# sourceMappingURL=FrameLoop.d.ts.map