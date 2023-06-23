import {injectable} from "inversify";
import {LoopInterface} from "./LoopInterface";
/**Centralized controller for all loop
**/
@injectable()
export class FrameLoopManager {
    //TODO
    // low workload adaptative loop? Like when FPS is green we execute code once evry Frame when it is not we execute once every seconde.
    // worker loop?

    started = false;
    constructor() {
    }

    loops = new Map<string, LoopInterface>();


    start() {
        this.started = true;
        for (const [key,entry] of this.loops) {
            entry.start();
        }
    }

    stop() {
        this.started = false;
        for (const [key,entry] of this.loops) {
            entry.stop();
        }
    }

    addLoop(name:string,loop:LoopInterface): () => void {
        if(this.loops.has(name)){
            throw new Error("Loop name already used :"+name);
        }
        if(this.started) {
            loop.start();
        }
        this.loops.set(name,loop);
        return () => {
            this.removeLoop(name);
        }
    }

    removeLoop(name:string) {
        this.loops.get(name).stop();
        this.loops.delete(name);
    }

}
