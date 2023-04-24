import {inject, injectable} from "inversify";
import {AnimationFrameLoopName, SetIntervalLoopName} from "../../Identifier";
import {AnimationFrameLoop} from "./AnimationFrameLoop";
import {LoopInterface} from "./LoopInterface";
import {SetIntervalLoop} from "./SetIntervalLoop";

export const ANIMATION_FRAME_LOOP = "ANIMATION_FRAME_LOOP";
export const INTERVAL_SET_1S = "INTERVAL_SET_1S";

//Kind of global loop control? maybe deprecated
@injectable()
export class FrameLoop {
    //TODO frame loop
    // setInterval Frameloop
    // animationFrame
    // Physic update
    // low workload adaptative loop? Like when FPS is green we execute code once evry Frame when it is not we execute once every seconde.
    // worker loop?
    // stats for all those loop (stats.js)
    // API to add task consumer?
    //callbacks:((delta:number)=>void)[] = [];


    constructor(
        @inject(AnimationFrameLoopName) animationFrameLoop:AnimationFrameLoop,
        @inject(SetIntervalLoopName) setIntervalLoop: (time: number) => SetIntervalLoop
    ) {
        this.loopType[ANIMATION_FRAME_LOOP] = animationFrameLoop;
        this.loopType[INTERVAL_SET_1S] = setIntervalLoop(1000);
    }

    loopType: { [id: string]: LoopInterface } = {};


    start() {
        for (const loopTypeKey in this.loopType) {
            this.loopType[loopTypeKey].start();
        }
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void, loopType: string = ANIMATION_FRAME_LOOP): () => void {
        return this.loopType[loopType].addLoop(loopName, iterationCallback);
    }

}
