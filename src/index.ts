import "reflect-metadata";

import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {
    AnimationFrameLoopFactoryName,
    FrameLoopManagerName,
    SetIntervalLoopFactoryName,
    SetTimeoutLoopFactoryName,
    LoopTimeLoggerName
} from "./Identifier";
import {AnimationFrameLoopFactory} from "./services/loop/AnimationFrameLoopFactory";
import {FrameLoopManager} from "./services/loop/FrameLoopManager";
import {SetIntervalLoopFactory} from "./services/loop/SetIntervalLoopFactory";
import {SetTimeoutLoopFactory} from "./services/loop/SetTimeoutLoopFactory";
import {LoopTimeLogger} from "./services/perf/LoopTimeLogger";

export * from "./services/loop/FrameLoopManager";
export * from "./services/loop/AnimationFrameLoopFactory"
export * from "./services/loop/LoopInterface"
export * from "./services/loop/SetIntervalLoopFactory"
export * from "./services/loop/SetTimeoutLoopFactory"

export * from "./services/perf/LoopTimeLogger"

export * from "./Identifier";

export class AxLoopModule implements AxModule {
    getModule(): ContainerModule {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(FrameLoopManagerName).to(FrameLoopManager).inSingletonScope();
            bind(LoopTimeLoggerName).to(LoopTimeLogger).inSingletonScope();
            bind(AnimationFrameLoopFactoryName).to(AnimationFrameLoopFactory).inSingletonScope();
            bind(SetTimeoutLoopFactoryName).to(SetTimeoutLoopFactory).inSingletonScope();
            bind(SetIntervalLoopFactoryName).to(SetIntervalLoopFactory).inSingletonScope();
        });
    }

}
