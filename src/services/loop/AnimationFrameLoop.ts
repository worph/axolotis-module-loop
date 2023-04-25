import {inject, injectable} from "inversify";
import {TimeLoggerName} from "../../Identifier";
import {TimeLogger, TimeLoggerInterface} from "../perf/TimeLogger";
import {LoopInterface} from "./LoopInterface";
import {makeid} from "@aptero/axolotis-module-id-generator";

@injectable()
export class AnimationFrameLoop implements LoopInterface {
    getType(): string {
        return this.type;
    }

    constructor(@inject(TimeLoggerName) private timeLogger:TimeLogger,private type: string = AnimationFrameLoop.name) {

    }

    loops: {
        loopName: string, iterationCallback: (delta: number) => void, timeLogger: TimeLoggerInterface
    }[] = [];

    start() {
        let prevTime: number = 0;
        const animate = (t) => {
            const delta = t - prevTime;
            prevTime = t;
            requestAnimationFrame(animate);
            for (const loop of this.loops) {
                loop.timeLogger.monitoringStart();
                loop.iterationCallback(delta);
                loop.timeLogger.monitoringEnd();
            }
        };
        requestAnimationFrame(animate);
    }

    removeLoop(loopName: string) {
        this.loops.filter((loop) => {
            if(loop.loopName === loopName){
                loop.timeLogger.monitoringStart(); //set this loop to 0 fix
                loop.timeLogger.monitoringEnd();
                return false;
            }else {
                return true;
            }
        });
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void {
        let instanceName = loopName + "-" + makeid(5);//ensure uniqueness of loop
        this.loops.push({
            loopName,
            iterationCallback,
            timeLogger : this.timeLogger.getTimeLogger(loopName)
        });
        return () => {
            this.removeLoop(loopName);
        }
    }
}
