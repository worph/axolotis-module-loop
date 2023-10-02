import {inject, injectable} from "inversify";
import {FrameLoopManagerName, LoopTimeLoggerName} from "../../Identifier";
import {LoopTimeLogger, TimeLoggerInterface} from "../perf/LoopTimeLogger";
import {FrameLoopManager} from "./FrameLoopManager";
import {LoopCallback, LoopInterface, LoopRemoverInterface} from "./LoopInterface";

/**
 * Using `setTimeout(..., 0)` to create a loop instead of `setInterval` has its own advantages and use-cases. Here are a few key advantages:
 *
 * 1. **Dynamic interval:** With `setTimeout`, you can have a dynamic interval, meaning the time between consecutive function calls can be different. This is useful when you want to adjust the delay between calls based on the processing time of each iteration or some other variable condition. With `setInterval`, the time between calls is fixed.
 *
 * 2. **Prevent overlapping calls:** When using `setTimeout`, the next call is scheduled only after the completion of the current call. This ensures that no two calls of the same function will be executed simultaneously, preventing overlapping calls. With `setInterval`, if the processing time of the function is longer than the interval, it may lead to overlapping calls, causing potential issues.
 *
 * 3. **Better control over stopping the loop:** With `setTimeout`, you can conditionally decide whether to continue the loop or not by scheduling the next call based on a condition within the function. This provides better control over stopping the loop. With `setInterval`, you would need to use `clearInterval` explicitly to stop the loop, and you might need to add additional checks or flags to control this behavior.
 *
 * However, it's important to note that using `setTimeout(..., 0)` creates a microtask queue that schedules the next call as soon as the current call stack is empty, which may cause the browser to be less responsive. If you need to create a loop with a constant interval or need to ensure that the browser remains responsive, using `setInterval` might be more appropriate.
 *
 * Here's an example of how to use `setTimeout` to create a loop:
 */

export class SetTimeoutLoop implements LoopInterface {
    enable = false;

    constructor(private callback: LoopCallback, private timeLogger: TimeLoggerInterface, private timeoutMs: number) {
    }

    start() {
        if (this.enable) {
            throw new Error("Loop already started");
        }
        this.enable = true;
        let prevTime: number = performance.now();
        const myLoop = () => {
            const startTaskTime = performance.now();
            const delta = startTaskTime - prevTime;
            prevTime = startTaskTime;
            this.timeLogger.monitoringStart();
            // Your code here
            this.callback(delta);
            this.timeLogger.monitoringEnd();
            const endTask = performance.now();
            const taskDelta = endTask - startTaskTime;
            // Schedule the next call with a dynamic interval
            if (this.enable) {
                setTimeout(myLoop, (taskDelta > this.timeoutMs) ? 0 : (this.timeoutMs - taskDelta));
            }
        }
        // Start the loop
        myLoop();
    }

    stop() {
        this.enable = false;
    }
}

@injectable()
export class SetTimeoutLoopFactory {

    constructor(
        @inject(LoopTimeLoggerName) private timeLogger: LoopTimeLogger,
        @inject(FrameLoopManagerName) private frameLoop: FrameLoopManager
    ) {
    }

    /**
     * Create a loop based on setTimeout.
     * This loop will try its best to run at the given interval but will not run if the previous call is not finished. (Main difference with setInterval)
     * If the task takes longer than the interval, the next call will be equivalent to a setTimeout(...,0).
     * if the task takes less than the interval, the next call will be equivalent to a setTimeout(...,interval - taskTime).
     * This will work even if the tab is not active but is throtle to 1S
     * Browsers throttle setTimeout calls to a maximum of 1 per second when a tab is hidden to maximize performance on active tabs
     * https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#Inactive_tabs
     * @param name
     * @param callback
     * @param timeoutMs
     */
    create(name: string, callback: LoopCallback, timeoutMs: number = 0): LoopRemoverInterface {
        let loop = new SetTimeoutLoop(callback, this.timeLogger.getTimeLogger(name), timeoutMs);
        this.frameLoop.addLoop(name, loop);
        return {
            loop: loop,
            remover: () => {
                this.frameLoop.removeLoop(name);
            }
        };
    }
}
