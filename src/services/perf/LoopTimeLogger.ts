import {injectable} from "inversify";

export interface TimeLoggerInterface {
    monitoringStart: () => void,
    monitoringEnd: () => void
}

export const SUFFIX_DELIMITER = "-";

@injectable()
export class LoopTimeLogger {

    getTimeLogger(name: string): TimeLoggerInterface {
        name = name.replace(/-[^-]*$/, "");//clean the name remove anythings after the last -
        let minTimeMs = 0,
            maxTimeMs = 0,
            totalTimeMs = 0,
            sampleNumber = 0,
            meanTimeMs = 0,
            start = 0,
            last = 0;
        let callbacks1 = this.callbacks;
        return {
            monitoringStart: () => {
                start = performance.now();
            },
            monitoringEnd: () => {
                const nowTime = performance.now();
                const time = nowTime - start;
                //create a mean
                totalTimeMs += time;
                sampleNumber++;
                meanTimeMs = totalTimeMs / sampleNumber;
                maxTimeMs = Math.max(maxTimeMs, time);
                minTimeMs = Math.min(minTimeMs, time);
                //if refresh ok notify
                for (const cb of callbacks1) {
                    if ((nowTime - last) > cb.refreshInterval) {
                        //avoid blocking the main thread
                        (async () => {
                            cb.cb(name, performance.timeOrigin + nowTime,
                                meanTimeMs,
                                minTimeMs,
                                maxTimeMs,
                                sampleNumber,
                                totalTimeMs);
                        })();
                        last = nowTime;
                        totalTimeMs = 0;
                        sampleNumber = 0;
                        meanTimeMs = 0;
                        minTimeMs = Number.MAX_VALUE;
                        maxTimeMs = Number.MIN_VALUE;
                    }
                }
            }
        }
    }

    callbacks: ({
        refreshInterval: number,
        cb: (label: string, time: number, duration: number, minTime: number, maxTime: number,
             sampleNumber: number,
             totalTimeMs: number) => void
    })[] = [];

    onPerfLog(minimumRefreshInterval: number, callback: (
        label: string,
        time: number,
        duration: number,
        minTime: number,
        maxTime: number,
        sampleNumber: number,
        totalTimeMs: number
    ) => void): () => void {
        this.callbacks.push({
            refreshInterval: minimumRefreshInterval,
            cb: callback
        });
        this.enablePerfLog(true);
        return () => {
            this.callbacks = this.callbacks.filter((cb) => cb.cb !== callback);
        }
    }

    enablePerfLog(activated: boolean) {
    }
}
