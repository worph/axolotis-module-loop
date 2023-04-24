import { AxModule } from "axolotis-module-definition";
import { ContainerModule } from "inversify";
export * from "./services/loop/FrameLoop";
export * from "./services/loop/AnimationFrameLoop";
export * from "./services/loop/LoopInterface";
export * from "./services/loop/SetIntervalLoop";
export * from "./services/perf/TimeLogger";
export * from "./Identifier";
export declare class AxLoopModule implements AxModule {
    getModule(): ContainerModule;
}
//# sourceMappingURL=index.d.ts.map