export class PerfLog {
    protected monitoringStart: (name) => void = () => {
    };
    protected monitoringEnd: (name) => void = () => {
    };

    callbacks: ({
        refreshInterval: number,
        last: number,
        cb: (label: string, time: number, duration: number, minTime: number, maxTime: number,
             sampleNumber: number,
             totalTimeMs: number) => void
    }
        )[] = [];

    loopData: Record<string, {
        start: number;
        minTimeMs: number, maxTimeMs: number, totalTimeMs: number, sampleNumber: number, meanTimeMs: number
    }> = {};

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
            last: 0,
            cb: callback
        });
        this.enablePerfLog(true);
        return () => {
            this.callbacks = this.callbacks.filter((cb) => cb.cb !== callback);
        }
    }

    enablePerfLog(activated: boolean) {
        if (activated) {
            this.monitoringStart = (loopName) => {
                let loopDatum = this.loopData[loopName];
                if (!loopDatum) {
                    loopDatum = {
                        minTimeMs: 0,
                        maxTimeMs: 0,
                        totalTimeMs: 0,
                        sampleNumber: 0,
                        meanTimeMs: 0,
                        start: 0
                    };
                    this.loopData[loopName] = loopDatum;
                }
                loopDatum.start = performance.now();
            }
            this.monitoringEnd = (loopName) => {
                let loopDatum = this.loopData[loopName];
                const nowTime = performance.now();
                let time = nowTime - loopDatum.start;
                for (let cb of this.callbacks) {
                    //create a mean
                    loopDatum.totalTimeMs += time;
                    loopDatum.sampleNumber++;
                    loopDatum.meanTimeMs = loopDatum.totalTimeMs / loopDatum.sampleNumber;
                    loopDatum.maxTimeMs = Math.max(loopDatum.maxTimeMs, time);
                    loopDatum.minTimeMs = Math.min(loopDatum.minTimeMs, time);
                    //if refresh ok notify
                    if (nowTime - cb.last > cb.refreshInterval) {
                        cb.cb(loopName, performance.timeOrigin + nowTime,
                            loopDatum.meanTimeMs,
                            loopDatum.minTimeMs,
                            loopDatum.maxTimeMs,
                            loopDatum.sampleNumber,
                            loopDatum.totalTimeMs);
                        cb.last = nowTime;
                        loopDatum.totalTimeMs = 0;
                        loopDatum.sampleNumber = 0;
                        loopDatum.meanTimeMs = 0;
                        loopDatum.minTimeMs = Number.MAX_VALUE;
                        loopDatum.maxTimeMs = Number.MIN_VALUE;
                    }
                }
            }
        } else {
            this.monitoringStart = () => {
            }
            this.monitoringEnd = () => {
            }
        }
    }

}
