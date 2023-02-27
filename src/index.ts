import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {FrameLoopName} from "./Identifier";
import {FrameLoop} from "./services/loop/FrameLoop";

export * from "./services/loop/FrameLoop";

export * from "./Identifier";

export class AxLoopModule implements AxModule{
    getModule(): ContainerModule {
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(FrameLoopName).toDynamicValue(() => {
                return new FrameLoop();
            }).inSingletonScope();
        });
    }

}
