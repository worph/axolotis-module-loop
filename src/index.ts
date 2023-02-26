import {AxModule} from "axolotis-module-definition";
import {ContainerModule, interfaces} from "inversify";
import {LoopServiceID} from "./Identifier";
import {FrameLoop} from "./services/loop/FrameLoop";

export * from "./services/loop/FrameLoop";

export * from "./Identifier";

export class AxBasicModule implements AxModule{
    getModule(): ContainerModule {
        console.log("AxBasicModule installed 2");
        return new ContainerModule((bind: interfaces.Bind) => {
            bind(FrameLoop.name).toDynamicValue(() => {
                return new FrameLoop()
            }).inSingletonScope();
            bind(LoopServiceID).toDynamicValue(() => {
                return new FrameLoop()
            }).inSingletonScope();
        });
    }

}
