import ScreepApplication from "../../interfaces/app";
import MemoryService from "../../interfaces/memory";

class SL1 implements ScreepApplication {

    /**
     *
     */
    constructor(memoryService: MemoryService) {
        //super();
    }

    // initiate caches & colony components
    build(): void {
        throw new Error("Method not implemented.");
    }

    // Spawning and energy requests
    init(): void {
        throw new Error("Method not implemented.");
    }

    // state changing actions
    run(): void {
        throw new Error("Method not implemented.");
    }
}

export default SL1;
