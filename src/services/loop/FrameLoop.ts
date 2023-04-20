import {AnimationFrameLoop} from "./AnimationFrameLoop";
import {LoopInterface} from "./LoopInterface";
import {SetIntervalLoop} from "./SetIntervalLoop";

export const ANIMATION_FRAME_LOOP = "ANIMATION_FRAME_LOOP";
export const INTERVAL_SET_1S = "INTERVAL_SET_1S";

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


    constructor() {
        this.loopType[ANIMATION_FRAME_LOOP] = new AnimationFrameLoop(ANIMATION_FRAME_LOOP);
        this.loopType[INTERVAL_SET_1S] = new SetIntervalLoop(1000, INTERVAL_SET_1S);
    }

    loopType: { [id: string]: LoopInterface } = {};


    start() {
        for (const loopTypeKey in this.loopType) {
            this.loopType[loopTypeKey].start();
        }
    }


    enablePerfLog(activated: boolean) {
        for (const loopTypeKey in this.loopType) {
            this.loopType[loopTypeKey].enablePerfLog(activated);
        }
    }

    onPerfLog(minimumRefreshInterval: number, callback: (label: string,
                                                         time: number,
                                                         duration: number,
                                                         minTime: number,
                                                         maxTime: number,
                                                         sampleNumber: number,
                                                         totalTimeMs: number) => void): () => void{
        let unsubscribe:(()=>void)[] = [];
        for (const loopTypeKey in this.loopType) {
            unsubscribe.push(this.loopType[loopTypeKey].onPerfLog(minimumRefreshInterval,callback));
        }
        return () => {
            unsubscribe.forEach((unsub) => unsub());
        }
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void, loopType: string = ANIMATION_FRAME_LOOP): () => void {
        return this.loopType[loopType].addLoop(loopName, iterationCallback);
    }

}
