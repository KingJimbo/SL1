import ISL from "interfaces/app";
import SL1 from "entities/app/app";

import IMemoryService from "interfaces/services/memory";
import MemoryService from "entities/services/memory/memory";

class Injector {

    private memoryService:IMemoryService;

    /**
     *
     */
    constructor() {
        this.memoryService = new MemoryService();
    }

    public getScreepsApplication():ISL {
        throw new Error("Method not implemented.");
        //return new SL1();
    }

    public getMemoryService():IMemoryService{
        return this.memoryService;
    }
}

export default Injector;
