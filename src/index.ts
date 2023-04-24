import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {AnimationFrameLoopName, FrameLoopName, SetIntervalLoopName, TimeLoggerName} from "./Identifier";
import {AnimationFrameLoop} from "./services/loop/AnimationFrameLoop";
import {FrameLoop} from "./services/loop/FrameLoop";
import {SetIntervalLoop} from "./services/loop/SetIntervalLoop";
import {TimeLogger} from "./services/perf/TimeLogger";

export * from "./services/loop/FrameLoop";
export * from "./services/loop/AnimationFrameLoop"
export * from "./services/loop/LoopInterface"
export * from "./services/loop/SetIntervalLoop"

export * from "./services/perf/TimeLogger"

export * from "./Identifier";

export class AxLoopModule implements AxModule {
    getModule(): ContainerModule {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(FrameLoopName).to(FrameLoop).inSingletonScope();
            bind(AnimationFrameLoopName).to(AnimationFrameLoop).inSingletonScope();
            bind(TimeLoggerName).to(TimeLogger).inSingletonScope();
            bind<interfaces.Factory<SetIntervalLoop>>(SetIntervalLoopName).toFactory<SetIntervalLoop, [number]>((context) => {
                return (time: number) => {
                    //TODO add key according to time to avoid recreating object
                    let timeLogger = context.container.get<TimeLogger>(TimeLoggerName);
                    return new SetIntervalLoop(timeLogger, time);
                };
            });
        });
    }

}
