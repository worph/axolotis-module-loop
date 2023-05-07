import { AxModule } from "axolotis-module-definition";
import { ContainerModule } from "inversify";
export * from "./services/loop/FrameLoopManager";
export * from "./services/loop/AnimationFrameLoopFactory";
export * from "./services/loop/LoopInterface";
export * from "./services/loop/SetIntervalLoopFactory";
export * from "./services/loop/SetTimeoutLoopFactory";
export * from "./services/perf/TimeLogger";
export * from "./Identifier";
export declare class AxLoopModule implements AxModule {
    getModule(): ContainerModule;
}
//# sourceMappingURL=index.d.ts.map