import ScreepsApplication from "interfaces/app";
import SL1 from "entities/app/sl_app";

import MemoryService from "interfaces/memory";
import SLMemoryService from "entities/memory/slmemory";

class Injector {

    private memoryService:MemoryService;

    /**
     *
     */
    constructor() {
        this.memoryService = new SLMemoryService();
    }

    public getScreepsApplication():ScreepsApplication {
        return new SL1(this.memoryService);
    }

    public getMemoryService():MemoryService{
        return this.memoryService;
    }
}

export default Injector;
