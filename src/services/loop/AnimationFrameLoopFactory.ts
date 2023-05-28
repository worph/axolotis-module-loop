import {inject, injectable} from "inversify";
import {FrameLoopManagerName, TimeLoggerName} from "../../Identifier";
import {TimeLogger, TimeLoggerInterface} from "../perf/TimeLogger";
import {FrameLoopManager} from "./FrameLoopManager";
import {LoopCallback, LoopInterface, LoopRemoverInterface} from "./LoopInterface";

export class AnimationFrameLoop implements LoopInterface {
    enable = false;

    constructor(private callback: LoopCallback, private timeLogger: TimeLoggerInterface) {
    }

    start() {
        if(this.enable){
            throw new Error("Loop already started");
        }
        this.enable = true;
        let prevTime: number = 0;
        const animate = (t) => {
            const delta = t - prevTime;
            prevTime = t;
            if(this.enable) {
                requestAnimationFrame(animate);
            }
            this.timeLogger.monitoringStart();
            this.callback(delta);
            this.timeLogger.monitoringEnd();
        };
        requestAnimationFrame(animate);
    }

    stop() {
        this.enable = false;
    }
}

@injectable()
export class AnimationFrameLoopFactory {

    constructor(
        @inject(TimeLoggerName) private timeLogger:TimeLogger,
        @inject(FrameLoopManagerName) private frameLoop: FrameLoopManager
    ) {
    }

    /**
     * Create a loop based on requestAnimationFrame.
     * Note tha if the focus is lost, the loop will be paused thus it should only be used for GFX and not for logic.
     * @param name
     * @param callback
     */
    create(name: string, callback:LoopCallback): LoopRemoverInterface {
        let loop = new AnimationFrameLoop(callback, this.timeLogger.getTimeLogger(name));
        this.frameLoop.addLoop(name,loop);
        return {
            loop: loop,
            remover: () => {
                this.frameLoop.removeLoop(name);
            }
        };
    }
}
