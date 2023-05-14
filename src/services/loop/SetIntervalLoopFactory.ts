import {inject, injectable} from "inversify";
import {FrameLoopManagerName, TimeLoggerName} from "../../Identifier";
import {TimeLogger, TimeLoggerInterface} from "../perf/TimeLogger";
import {FrameLoopManager} from "./FrameLoopManager";
import {LoopCallback, LoopInterface, LoopRemoverInterface} from "./LoopInterface";

/**
 * Using `setInterval` to create a loop has its own advantages and drawbacks. Here are some key points to consider:
 *
 * Advantages:
 *
 * 1. **Simplicity:** `setInterval` is straightforward to use and easy to understand. It allows you to create a loop that executes a function at regular intervals with a simple syntax.
 * ```javascript
 * const intervalId = setInterval(myFunction, interval);
 * ```
 *
 * 2. **Consistent intervals:** With `setInterval`, the time between each function call is fixed, ensuring a consistent interval between iterations. This is useful when you need to perform a task periodically, like updating the UI or polling a server.
 *
 * 3. **Automatic loop:** Once `setInterval` is called, it will continue to execute the specified function at the given interval until it's explicitly stopped using `clearInterval`. This means you don't need to manually schedule the next call within the function.
 *
 * Drawbacks:
 *
 * 1. **Fixed interval:** The interval between function calls is fixed, which means you cannot dynamically adjust the time between calls based on processing time or other conditions. If you need a dynamic interval, you'll need to use `setTimeout` instead.
 *
 * 2. **Overlapping calls:** If the processing time of the function is longer than the interval, it may lead to overlapping calls, causing potential issues. To avoid this, you can either increase the interval or use `setTimeout` to ensure that the next call is scheduled only after the current call has completed.
 *
 * 3. **Stopping the loop:** To stop a loop created with `setInterval`, you need to call `clearInterval` with the interval ID that was returned when the loop was created. You might need to add additional checks or flags to control this behavior, which can be more complex compared to using `setTimeout`, where you can conditionally decide whether to continue the loop or not by scheduling the next call based on a condition within the function.
 *
 * 4. **Less control over execution order:** With `setInterval`, you have less control over the execution order, especially when dealing with asynchronous code or when the interval is very short. This can lead to unexpected behavior.
 *
 * In summary, using `setInterval` to create a loop is suitable for simple, periodic tasks with a fixed interval. However, if you need more control over the loop execution or need a dynamic interval between function calls, using `setTimeout` might be more appropriate.
 */
export class SetIntervalLoop implements LoopInterface {
    private intervalId = null;

    constructor(private callback: LoopCallback, private timeLogger: TimeLoggerInterface,private intervalMs:number) {
    }

    start() {
        if(this.intervalId){
            throw new Error("Loop already started");
        }
        let prevTime: number = 0;
        const animate = (t) => {
            const delta = t - prevTime;
            prevTime = t;
            this.timeLogger.monitoringStart();
            this.callback(delta);
            this.timeLogger.monitoringEnd();
        };
        this.intervalId = setInterval(animate, this.intervalMs);
    }

    stop() {
        if(this.intervalId){
            this.intervalId = null;
            clearInterval(this.intervalId);
        }
    }
}

@injectable()
export class SetIntervalLoopFactory {

    constructor(
        @inject(TimeLoggerName) private timeLogger:TimeLogger,
        @inject(FrameLoopManagerName) private frameLoop: FrameLoopManager
    ) {
    }

    /**
     * Create a loop based on setInterval.
     * See https://developer.mozilla.org/en-US/docs/Web/API/setInterval#ensure_that_execution_duration_is_shorter_than_interval_frequency
     * @param name
     * @param callback
     * @param intervalMs
     */
    create(name: string, callback:LoopCallback,intervalMs:number=0): LoopRemoverInterface {
        let loop = new SetIntervalLoop(callback, this.timeLogger.getTimeLogger(name),intervalMs);
        this.frameLoop.addLoop(name,loop);
        return {
            loop: loop,
            remover: () => {
                this.frameLoop.removeLoop(name);
            }
        };
    }
}
