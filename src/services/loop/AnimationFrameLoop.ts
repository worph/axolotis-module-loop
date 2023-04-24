import {inject, injectable} from "inversify";
import {TimeLoggerName} from "../../Identifier";
import {TimeLogger} from "../perf/TimeLogger";
import {LoopInterface} from "./LoopInterface";
import {makeid} from "@aptero/axolotis-module-id-generator";

@injectable()
export class AnimationFrameLoop implements LoopInterface {
    getType(): string {
        return this.type;
    }

    constructor(@inject(TimeLoggerName) private timeLogger:TimeLogger,private type: string = AnimationFrameLoop.name) {

    }

    loops: { [id: string]: { loopName: string, iterationCallback: (delta: number) => void } } = {};
    private prevTime: number = 0;

    start() {
        let type = this.getType();
        const animate = (t) => {
            const delta = t - this.prevTime;
            this.prevTime = t;
            requestAnimationFrame(animate);
            for (const callback in this.loops) {
                this.timeLogger.monitoringStart(this.loops[callback].loopName);
                this.loops[callback].iterationCallback(delta);
                this.timeLogger.monitoringEnd(this.loops[callback].loopName);
            }
        };
        requestAnimationFrame(animate);
    }

    removeLoop(loopName: string) {
        delete this.loops[loopName];
        this.timeLogger.monitoringStart(loopName); //set this loop to 0 fix
        this.timeLogger.monitoringEnd(loopName);
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void {
        let instanceName = loopName + "-" + makeid(5);//ensure uniqueness of loop
        this.loops[instanceName] = {
            loopName,
            iterationCallback
        };
        return () => {
            this.removeLoop(loopName);
        }
    }
}
