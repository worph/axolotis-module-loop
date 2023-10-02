import { AxModule } from 'axolotis-module-definition';
import { ContainerModule } from 'inversify';

interface LoopInterface {
    start(): void;
    stop(): void;
}
type LoopCallback = (delta: number) => void;
interface LoopRemoverInterface {
    loop: LoopInterface;
    remover: () => void;
}

declare class FrameLoopManager {
    started: boolean;
    constructor();
    loops: Map<string, LoopInterface>;
    start(): void;
    stop(): void;
    addLoop(name: string, loop: LoopInterface): () => void;
    removeLoop(name: string): void;
}

interface TimeLoggerInterface {
    monitoringStart: () => void;
    monitoringEnd: () => void;
}
declare const SUFFIX_DELIMITER = "-";
declare class LoopTimeLogger {
    getTimeLogger(name: string): TimeLoggerInterface;
    callbacks: ({
        refreshInterval: number;
        cb: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void;
    })[];
    onPerfLog(minimumRefreshInterval: number, callback: (label: string, time: number, duration: number, minTime: number, maxTime: number, sampleNumber: number, totalTimeMs: number) => void): () => void;
    enablePerfLog(activated: boolean): void;
}

declare class AnimationFrameLoop implements LoopInterface {
    private callback;
    private timeLogger;
    enable: boolean;
    constructor(callback: LoopCallback, timeLogger: TimeLoggerInterface);
    start(): void;
    stop(): void;
}
declare class AnimationFrameLoopFactory {
    private timeLogger;
    private frameLoop;
    constructor(timeLogger: LoopTimeLogger, frameLoop: FrameLoopManager);
    create(name: string, callback: LoopCallback): LoopRemoverInterface;
}

declare class SetIntervalLoop implements LoopInterface {
    private callback;
    private timeLogger;
    private intervalMs;
    private intervalId;
    constructor(callback: LoopCallback, timeLogger: TimeLoggerInterface, intervalMs: number);
    start(): void;
    stop(): void;
}
declare class SetIntervalLoopFactory {
    private timeLogger;
    private frameLoop;
    constructor(timeLogger: LoopTimeLogger, frameLoop: FrameLoopManager);
    create(name: string, callback: LoopCallback, intervalMs?: number): LoopRemoverInterface;
}

declare class SetTimeoutLoop implements LoopInterface {
    private callback;
    private timeLogger;
    private timeoutMs;
    enable: boolean;
    constructor(callback: LoopCallback, timeLogger: TimeLoggerInterface, timeoutMs: number);
    start(): void;
    stop(): void;
}
declare class SetTimeoutLoopFactory {
    private timeLogger;
    private frameLoop;
    constructor(timeLogger: LoopTimeLogger, frameLoop: FrameLoopManager);
    create(name: string, callback: LoopCallback, timeoutMs?: number): LoopRemoverInterface;
}

declare const FrameLoopManagerName: unique symbol;
declare const AnimationFrameLoopFactoryName: unique symbol;
declare const SetIntervalLoopFactoryName: unique symbol;
declare const SetTimeoutLoopFactoryName: unique symbol;
declare const LoopTimeLoggerName: unique symbol;

declare class AxLoopModule implements AxModule {
    getModule(): ContainerModule;
}

export { AnimationFrameLoop, AnimationFrameLoopFactory, AnimationFrameLoopFactoryName, AxLoopModule, FrameLoopManager, FrameLoopManagerName, LoopCallback, LoopInterface, LoopRemoverInterface, LoopTimeLogger, LoopTimeLoggerName, SUFFIX_DELIMITER, SetIntervalLoop, SetIntervalLoopFactory, SetIntervalLoopFactoryName, SetTimeoutLoop, SetTimeoutLoopFactory, SetTimeoutLoopFactoryName, TimeLoggerInterface };
