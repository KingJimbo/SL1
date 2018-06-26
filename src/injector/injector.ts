import ISL from "interfaces/app";
import SL1 from "entities/app/app";

import MemoryService from "interfaces/services/memory";
import MemoryHelper from "entities/helpers/memory/memory";

class Injector {

    private memoryService:MemoryService;

    /**
     *
     */
    constructor() {
        this.memoryService = new MemoryHelper();
    }

    public getScreepsApplication():ISL {
        throw new Error("Method not implemented.");
        //return new SL1();
    }

    public getMemoryService():MemoryService{
        return this.memoryService;
    }
}

export default Injector;
