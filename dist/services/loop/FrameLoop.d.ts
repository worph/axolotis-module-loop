import { AnimationFrameLoop } from "./AnimationFrameLoop";
import { LoopInterface } from "./LoopInterface";
import { SetIntervalLoop } from "./SetIntervalLoop";
export declare const ANIMATION_FRAME_LOOP = "ANIMATION_FRAME_LOOP";
export declare const INTERVAL_SET_1S = "INTERVAL_SET_1S";
export declare class FrameLoop {
    constructor(animationFrameLoop: AnimationFrameLoop, setIntervalLoop: (time: number) => SetIntervalLoop);
    loopType: {
        [id: string]: LoopInterface;
    };
    start(): void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void, loopType?: string): () => void;
}
//# sourceMappingURL=FrameLoop.d.ts.map