import {makeid} from "@aptero/axolotis-module-id-generator";
import {TimeLogger} from "../perf/TimeLogger";
import {LoopInterface} from "./LoopInterface";
export class SetIntervalLoop implements LoopInterface {
    loops: { [id: string]: { loopName: string, iterationCallback: (delta: number) => void } } = {};
    private prevTime: number = 0;

    constructor(private timeLogger:TimeLogger, private intervalMs: number) {
    }

    start() {
        const animate = (t) => {
            const delta = t - this.prevTime;
            this.prevTime = t;
            for (const callbackKey in this.loops) {
                this.timeLogger.monitoringStart(this.loops[callbackKey].loopName);
                this.loops[callbackKey].iterationCallback(delta);
                this.timeLogger.monitoringEnd(this.loops[callbackKey].loopName);
            }
        };
        setInterval(animate, this.intervalMs);
    }

    removeLoop(loopName: string) {
        delete this.loops[loopName];
        this.timeLogger.monitoringStart(loopName); //set this loop to 0 fix
        this.timeLogger.monitoringEnd(loopName);
    }

    addLoop(loopName: string, iterationCallback: (delta: number) => void): () => void {
        let instanceName = loopName;
        if (this.loops[instanceName]) {
            instanceName = loopName + "-" + makeid(5);
        }
        this.loops[instanceName] = {
            loopName,
            iterationCallback
        };
        return () => {
            this.removeLoop(loopName);
        }
    }


}
