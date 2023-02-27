import {AxModuleAsync} from "axolotis-module-definition";
import {AsyncContainerModule, interfaces} from "inversify";
import {FrameLoopName} from "./Identifier";
import {FrameLoop} from "./services/loop/FrameLoop";

export * from "./Identifier";

export class AxLoopModule implements AxModuleAsync{
    getModule(): AsyncContainerModule {
        return new AsyncContainerModule(async (bind: interfaces.Bind) => {
            bind(FrameLoopName).toDynamicValue(async () => {
                return new FrameLoop();
            }).inSingletonScope();
        });
    }

}
