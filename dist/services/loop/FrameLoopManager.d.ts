import { LoopInterface } from "./LoopInterface";
export declare class FrameLoopManager {
    started: boolean;
    constructor();
    loops: Map<string, LoopInterface>;
    start(): void;
    stop(): void;
    addLoop(name: string, loop: LoopInterface): () => void;
    removeLoop(name: string): void;
}
//# sourceMappingURL=FrameLoopManager.d.ts.map