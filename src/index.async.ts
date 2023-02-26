import {AxModuleAsync} from "axolotis-module-definition";
import {AsyncContainerModule, interfaces} from "inversify";
import {LoopServiceID} from "./Identifier";
import {FrameLoop} from "./services/loop/FrameLoop";

export * from "./Identifier";

export class AxBasicModule implements AxModuleAsync{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(LoopServiceID).toDynamicValue(async () => {
                return new FrameLoop()
            }).inSingletonScope();
        });
    }

}
